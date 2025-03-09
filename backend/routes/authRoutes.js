const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// 🔹 POST: สมัครสมาชิก
router.post('/register', authController.register);

// 🔹 POST: ล็อกอิน
router.post('/login', authController.login);

module.exports = router;
