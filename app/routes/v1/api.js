const express = require('express');
const router = new express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const userController = require('../../controllers/user');

router.all('*', authMiddleware.isAuth);

router.post('/user',userController.store)
module.exports = router;