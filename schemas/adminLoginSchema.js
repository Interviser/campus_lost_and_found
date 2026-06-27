const mongoose = require('mongoose');

const adminLoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true },
    role: { type: String, required: true, default: 'admin' },
});

const Admin = mongoose.model('Admin', adminLoginSchema);
mongoose.exports = { Admin };
