const express = require('express');
const router = new express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const userController = require('../../controllers/user');
const loginController = require('../../controllers/login');
const postController = require('../../controllers/post');

router.post('/user',userController.store)
router.post('/login',loginController.login)

router.all('*', authMiddleware.isAuth);


router.get('/posts',postController.index)
router.put('/posts/:id',postController.update)
router.post('/posts',postController.store)
router.delete('/posts/:id',postController.delete)

module.exports = router;