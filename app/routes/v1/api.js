const express = require('express');
const router = new express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const userController = require('../../controllers/user');
const loginController = require('../../controllers/login');

router.all('*', authMiddleware.isAuth);

router.post('/user',userController.store)
router.post('/login',loginController.login)
module.exports = router;