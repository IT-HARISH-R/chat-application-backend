const express = require('express');
const auth = require('../middlewares/auth.js');
const userController = require('../controllers/usercontroller.js');

const userRoutes = express.Router();

// User registration
userRoutes.post('/register', userController.register);

// User login
userRoutes.post('/login', userController.login);

// Get user profile (requires authentication)

userRoutes.get('/profile',auth.checkAuth, userController.me);
userRoutes.put('/update-profile',auth.checkAuth, userController.update);
userRoutes.post('/getbyid',auth.checkAuth, userController.getuserbyid);

userRoutes.post('/forgotpassword',userController.ForgotPassword);
userRoutes.post('/reset-password/:token',userController.resetPassword);

// Update user profile (requires authentication)

// Delete user account (requires authentication)
// userRoutes.delete('/profile', authenticate, deleteUser);

module.exports = userRoutes;
