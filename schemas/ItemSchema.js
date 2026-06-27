const mongoose = require('mongoose');

//name, description, location, dateLost, imageURL
const itemSchema = new mongoose.Schema({
    name:{ type: String, required: true },
    description:{ type: String, required: true },
    location:{ type: String, required: true },
    dateLost:{ type: Date, required: true },
    imageURL:{ type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const itemModel = mongoose.model("lostItems", itemSchema);
module.exports = { itemModel };