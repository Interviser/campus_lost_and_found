const express = require('express');
const adminLoginRouter = express.Router();
const { verifyAdminToken } = require('../middlewares/verifyAdminToken');
const { adminLogin } = require('../controllers/adminLogin');

adminLoginRouter.post('/admin/login',verifyAdminToken, adminLogin);

module.exports = { adminLoginRouter };