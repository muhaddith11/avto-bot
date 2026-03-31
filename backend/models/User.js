const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  chatId: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, default: 'mechanic' }, // 'mechanic' or 'admin'
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
