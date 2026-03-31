require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Telegraf, session, Markup } = require('telegraf');
const cors = require('cors');

const WorkOrder = require('./models/WorkOrder');
const User = require('./models/User');
const catalogData = require('./data');

const app = express();
app.use(express.json());
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/flash_master';
const WEB_APP_URL = process.env.WEB_APP_URL || 'http://localhost:5173';
const ADMIN_ID = process.env.ADMIN_ID;

if (!BOT_TOKEN) {
  console.error("BOT_TOKEN is missing in .env file");
  process.exit(1);
}

// Telegram Bot Setup
const bot = new Telegraf(BOT_TOKEN);
bot.use(session());

// Har 1 soatda eski xabarlarni o'chiradigan funksiya
const cleanupOldMessages = async () => {
  try {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    // 24 soatdan oshgan va hali o'chirilmagan mechanicMessageId bor orderlarni topish
    const oldOrders = await WorkOrder.find({
      createdAt: { $lt: oneDayAgo },
      mechanicMessageId: { $ne: null }
    });

    for (const order of oldOrders) {
      try {
        await bot.telegram.deleteMessage(order.mechanicChatId, order.mechanicMessageId);
        // O'chirilganini belgilab qo'yamiz
        await WorkOrder.updateOne({ _id: order._id }, { $set: { mechanicMessageId: null } });
      } catch (err) {
        // Agar xabar allaqachon o'chirilgan bo'lsa yoki boshqa xato bo'lsa
        await WorkOrder.updateOne({ _id: order._id }, { $set: { mechanicMessageId: null } });
      }
    }
  } catch (err) {
    console.error("Cleanup job error:", err);
  }
};

// Har 1 soatda tozalash
setInterval(cleanupOldMessages, 60 * 60 * 1000);

// Registration flow
bot.start(async (ctx) => {
  const chatId = ctx.chat.id.toString();
  const user = await User.findOne({ chatId });

  if (user) {
    await ctx.reply(`Assalomu alaykum, ${user.fullName}! Yangi ish boshlash uchun pastdagi tugmani bosing.`, {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🚀 Xizmatni boshlash", web_app: { url: `${WEB_APP_URL}?chatId=${chatId}` } }]
        ]
      }
    });
  } else {
    ctx.session = { step: 'ASK_NAME' };
    await ctx.reply("Assalomu alaykum! Botdan foydalanish uchun ro'yxatdan o'tishingiz kerak.\n\nIltimos, Ism va Familiyangizni kiriting:");
  }
});

bot.on('text', async (ctx) => {
  if (!ctx.session || !ctx.session.step) return;

  if (ctx.session.step === 'ASK_NAME') {
    ctx.session.fullName = ctx.message.text;
    ctx.session.step = 'ASK_PHONE';
    await ctx.reply("Rahmat! Endi pastdagi tugmani bosish orqali telefon raqamingizni yuboring:", {
      reply_markup: {
        keyboard: [[{ text: "📞 Telefon raqamni yuborish", request_contact: true }]],
        resize_keyboard: true, one_time_keyboard: true
      }
    });
  }
});

bot.on('contact', async (ctx) => {
  if (!ctx.session || ctx.session.step !== 'ASK_PHONE') return;

  const phoneNumber = ctx.message.contact.phone_number;
  const fullName = ctx.session.fullName;
  const chatId = ctx.chat.id.toString();

  try {
    const newUser = new User({ chatId, fullName, phoneNumber });
    await newUser.save();
    ctx.session = null;
    await ctx.reply("Muvaffaqiyatli ro'yxatdan o'tdingiz!", { reply_markup: { remove_keyboard: true } });
    await ctx.reply(`Yangi ish boshlash uchun pastdagi tugmani bosing.`, {
      reply_markup: {
        inline_keyboard: [[{ text: "🚀 Xizmatni boshlash", web_app: { url: `${WEB_APP_URL}?chatId=${chatId}` } }]]
      }
    });
  } catch (err) {
    await ctx.reply("Xatolik! Qaytadan urining /start");
  }
});

bot.catch((err, ctx) => { console.error(`Bot Error:`, err); });

bot.launch({ drop_pending_updates: true })
  .then(() => console.log('Telegraf Bot is now polling!'))
  .catch(err => console.error('Bot launch error:', err));

// MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('DB Error:', err.message));

// API
app.get('/api/catalog', (req, res) => {
  res.json({ brands: Object.keys(catalogData), catalog: catalogData });
});

app.post('/api/order', async (req, res) => {
  try {
    const { brand, model, probeg, plateNumber, services, parts, mechanicChatId } = req.body;
    const mechanic = await User.findOne({ chatId: mechanicChatId.toString() });

    let totalServices = (services || []).reduce((sum, s) => sum + Number(s.price), 0);
    let totalParts = (parts || []).reduce((sum, p) => sum + (Number(p.price) * Number(p.quantity)), 0);
    const totalAmount = totalServices + totalParts;

    // Receipt Text
    let msg = `🧾 **ELEKTRON CHEK**\n\n`;
    msg += `👤 **Usta:** ${mechanic ? mechanic.fullName : 'Noma\'lum'}\n`;
    msg += `📞 **Tel:** ${mechanic ? mechanic.phoneNumber : 'Noma\'lum'}\n\n`;
    msg += `🚗 **Avto:** ${brand} ${model}\n`;
    msg += `🔢 **Davlat raqami:** ${plateNumber}\n`;
    msg += `🛣 **Probeg:** ${probeg} km\n`;
    msg += `🕒 **Sana:** ${new Date().toLocaleString('uz-UZ')}\n\n`;

    if (services?.length) {
      msg += `🛠 **XIZMATLAR:**\n`;
      services.forEach((s, i) => msg += `${i+1}. ${s.name} - ${s.price.toLocaleString()} UZS\n`);
      msg += `\n`;
    }
    if (parts?.length) {
      msg += `⚙️ **EHTIYOT QISMLAR:**\n`;
      parts.forEach((p, i) => msg += `${i+1}. ${p.name} (${p.quantity} x ${p.price.toLocaleString()}) - ${(p.quantity * p.price).toLocaleString()} UZS\n`);
      msg += `\n`;
    }
    msg += `------------------------\n💰 **UMUMIY SUMMA:** ${totalAmount.toLocaleString()} UZS\n\n`;
    msg += `(Ushbu tizimdagi ma'lumotlar 24 soatdan so'ng avtomatik tozalanadi)`;

    // 1. Send to Mechanic (Will be deleted in 24h)
    let mechMsg;
    try {
      mechMsg = await bot.telegram.sendMessage(mechanicChatId, msg, { parse_mode: 'Markdown' });
    } catch(e) {}

    // 2. Save Order with Message ID
    const order = new WorkOrder({
      brand, model, probeg, plateNumber, services, parts, totalAmount, mechanicChatId,
      mechanicMessageId: mechMsg ? mechMsg.message_id : null
    });
    await order.save();

    // 3. Send to Admin (Permanent copy)
    if (ADMIN_ID && mechanicChatId !== ADMIN_ID) {
      try {
        await bot.telegram.sendMessage(ADMIN_ID, `📣 **YANGI CHEK (Nusxa)**\n\n` + msg, { parse_mode: 'Markdown' });
      } catch(e) {}
    }

    res.json({ success: true, orderId: order._id });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}`));
