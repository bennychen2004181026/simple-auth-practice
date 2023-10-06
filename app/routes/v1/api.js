const express = require('express');
const router = new express.Router();
const authMiddleware = require('../../middleware/authMiddleware');


router.all('*', authMiddleware.isAuth);
module.exports = router;