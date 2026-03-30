require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Telegraf } = require('telegraf');
const cors = require('cors');

const WorkOrder = require('./models/WorkOrder');
const catalogData = require('./data');

const app = express();
app.use(express.json());
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/flash_master';
const WEB_APP_URL = process.env.WEB_APP_URL || 'http://localhost:5173'; // Frontend local url

if (!BOT_TOKEN) {
  console.error("BOT_TOKEN is missing in .env file");
  process.exit(1);
}

// Telegram Bot Setup
const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  try {
    await ctx.reply('Assalomu alaykum, Usta! Yangi ish boshlash uchun pastdagi tugmani bosing.', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Xizmat", web_app: { url: `${WEB_APP_URL}?chatId=${ctx.chat.id}` } }]
        ]
      }
    });
  } catch (err) {
    console.error("Bot start error (might be invalid Web App URL format):", err.message);
  }
});

bot.catch((err, ctx) => {
  console.error(`Bot Error for ${ctx.updateType}:`, err);
});

console.log("Starting telegraf launch...");
bot.launch({ drop_pending_updates: true })
  .then(() => console.log('Telegraf Bot is now polling!'))
  .catch(err => console.error('Bot launch error:', err));

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/flash_master', { serverSelectionTimeoutMS: 2000 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Tizim vaqtinchalik ma\'lumotlar bazasisiz ishlamoqda. Telegram xabarlari to\'liq yetib boradi. DB xatosi:', err.message));

// API Routes
app.get('/api/catalog', (req, res) => {
  res.json({
    brands: Object.keys(catalogData),
    catalog: catalogData
  });
});

app.post('/api/order', async (req, res) => {
  try {
    const { brand, model, probeg, plateNumber, services, parts, mechanicChatId } = req.body;

    if (!mechanicChatId) {
      return res.status(400).json({ error: "mechanicChatId kiritilmagan!" });
    }

    // Hisob kitob
    let totalServices = 0;
    if (services && services.length > 0) {
      totalServices = services.reduce((sum, s) => sum + Number(s.price), 0);
    }

    let totalParts = 0;
    if (parts && parts.length > 0) {
      totalParts = parts.reduce((sum, p) => sum + (Number(p.price) * Number(p.quantity)), 0);
    }
    
    const totalAmount = totalServices + totalParts;

    // Save to Mongo (Graceful degradation if DB is down)
    let orderId = 'no-db-' + Date.now();
    try {
      if (mongoose.connection.readyState === 1) {
        const order = new WorkOrder({
          brand, model, probeg, plateNumber, services, parts, totalAmount, mechanicChatId
        });
        await order.save();
        orderId = order._id;
      } else {
        console.warn("MongoDB is not connected. Skipping DB save, but proceeding with Telegram receipt.");
      }
    } catch (dbError) {
      console.error("MongoDB Save Error (Proceeding anyway):", dbError.message);
    }

    // Format Receipt (Chek) for Telegram Message
    let msg = `🧾 **ELEKTRON CHEK**\n\n`;
    msg += `🚗 **Avto:** ${brand} ${model}\n`;
    msg += `🔢 **Davlat raqami:** ${plateNumber}\n`;
    msg += `🛣 **Probeg:** ${probeg} km\n`;
    msg += `🕒 **Sana:** ${new Date().toLocaleString('uz-UZ')}\n\n`;

    if (services && services.length > 0) {
      msg += `🛠 **XIZMATLAR:**\n`;
      services.forEach((s, idx) => {
        msg += `${idx + 1}. ${s.name} - ${s.price.toLocaleString()} UZS\n`;
      });
      msg += `\n`;
    }

    if (parts && parts.length > 0) {
      msg += `⚙️ **EHTIYOT QISMLAR:**\n`;
      parts.forEach((p, idx) => {
        msg += `${idx + 1}. ${p.name} (${p.quantity} x ${p.price.toLocaleString()}) - ${(Number(p.quantity) * Number(p.price)).toLocaleString()} UZS\n`;
      });
      msg += `\n`;
    }

    msg += `------------------------\n`;
    msg += `💰 **UMUMIY SUMMA:** ${totalAmount.toLocaleString()} UZS\n\n`;
    msg += `(Ushbu tizimdagi ma'lumotlar 24 soatdan so'ng avtomatik tozalanadi)`;

    try {
      await bot.telegram.sendMessage(mechanicChatId, msg, { parse_mode: 'Markdown' });
    } catch(tgErr) {
      console.error("Xabarni Telegramga yuborishda xatolik (Balki ID noto'g'ri):", tgErr.message);
    }

    res.json({ success: true, orderId: orderId });

  } catch (error) {
    console.error("Order save error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});
