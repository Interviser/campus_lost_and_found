const express = require('express');

const uploadLostItemsrouter = express.Router();
const { cloudinarymiddleware } = require('../middlewares/uploadToCloudinary');
const { uploadLostItems } = require('../controllers/uploadlostItems');
const { verifyToken } = require('../middlewares/verifyToken');

uploadLostItemsrouter.post('/upload', verifyToken, cloudinarymiddleware, uploadLostItems);

module.exports = {uploadLostItemsrouter};