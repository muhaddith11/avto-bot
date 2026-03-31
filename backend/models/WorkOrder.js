const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isCustom: { type: Boolean, default: false }
});

const partSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  price: { type: Number, required: true },
  isCustom: { type: Boolean, default: false }
});

const workOrderSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  probeg: { type: Number, required: true },
  plateNumber: { type: String, required: true },
  services: [serviceSchema],
  parts: [partSchema],
  totalAmount: { type: Number, required: true },
  mechanicChatId: { type: String, required: true },
  mechanicMessageId: { type: Number }, // Telegram xabarini o'chirish uchun
  createdAt: { type: Date, default: Date.now, expires: 86400 } // 24 soatdan so'keyin DB dan o'chadi
}, { timestamps: true });

module.exports = mongoose.model('WorkOrder', workOrderSchema);
