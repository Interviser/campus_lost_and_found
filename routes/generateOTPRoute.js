const express = require('express');

const { authenticateToken } = require('../controllers/generateAndSendOTP');

const generateOTPRouter = express.Router();

generateOTPRouter.post('/generateOTP', authenticateToken);

module.exports = { generateOTPRouter };