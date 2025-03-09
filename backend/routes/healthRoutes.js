const express = require('express');
const router = express.Router();

// Health Check API
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        uptime: process.uptime(),
        timestamp: Date.now()
    });
});

module.exports = router;
