const express = require('express');
const { lostItems } = require('../controllers/lostItems');
const { verifyToken } = require('../middlewares/verifyToken');

const lostItemsRouter = express.Router();

lostItemsRouter.get('/lostItems', verifyToken, lostItems);

module.exports = { lostItemsRouter };