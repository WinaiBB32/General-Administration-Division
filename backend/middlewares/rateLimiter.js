const rateLimit = require('express-rate-limit');

// จำกัดการขอ API 100 ครั้ง ต่อ 15 นาที ต่อ IP
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 นาที
    max: 100, // จำกัด 100 requests ต่อ 15 นาที
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.'
    }
});

// จำกัดเฉพาะการล็อกอิน (ป้องกัน Brute Force Attack)
const loginLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 นาที
    max: 5, // จำกัด 5 requests ต่อ 10 นาที
    message: {
        success: false,
        message: 'Too many login attempts, please try again later.'
    }
});

module.exports = { apiLimiter, loginLimiter };
