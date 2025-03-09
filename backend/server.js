const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const logger = require('./config/logger');
const errorHandler = require('./middlewares/errorHandler');
const statusMonitor = require('express-status-monitor');
const { apiLimiter, loginLimiter } = require('./middlewares/rateLimiter'); // เพิ่ม Rate Limiter

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
// const taskRoutes = require('./routes/taskRoutes');
// const equipmentRoutes = require('./routes/equipmentRoutes');
// const borrowRoutes = require('./routes/borrowRoutes');
// const notificationRoutes = require('./routes/notificationRoutes');
// const auditLogRoutes = require('./routes/auditLogRoutes');
const healthRoutes = require('./routes/healthRoutes'); // เพิ่ม Health Check


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(statusMonitor()); // ติดตั้งระบบ Monitoring

// ใช้ Rate Limiting กับทุก API
app.use('/api/', apiLimiter);

// ใช้ Rate Limiting เฉพาะ API Login
app.use('/api/auth/login', loginLimiter);

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/equipment', equipmentRoutes);
// app.use('/api/borrow', borrowRoutes);
// app.use('/api/notifications', notificationRoutes);
// app.use('/api/auditlogs', auditLogRoutes);
app.use('/api', healthRoutes); // ใช้งาน Health Check

// Error Handling Middleware
app.use(errorHandler);

// Database Sync
sequelize.sync()
    .then(() => logger.info('Database connected and models synced.'))
    .catch(err => logger.error(`Database Error: ${err.message}`));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`);
});
