const express = require('express');
const { authenicate } = require('../controllers/authentication');

const authenticateRouter = express.Router();

authenticateRouter.post('/authenticate', authenicate);

module.exports = { authenticateRouter };