import express from 'express';
import { signup, login, getUserProfile, logout, updateUserProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import upload from '../utils/multer.js'; // Correct import path

const router = express.Router();

// Define routes
router.route('/signup').post(signup); // Signup route
router.route('/login').post(login); // Login route
router.route('/profile').get(isAuthenticated, getUserProfile); // Get user profile route
router.route('/profile/update').put(isAuthenticated, upload.single('profilePhoto'), updateUserProfile); // Update user profile route with multer middleware
router.route('/logout').post(logout); // Logout route

export default router;
