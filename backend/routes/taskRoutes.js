const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

// 🔹 GET: ดูรายการงานทั้งหมด (เฉพาะ Admin และ Manager)
router.get('/', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin', 'manager']), taskController.getAllTasks);

// 🔹 GET: ดูรายละเอียดงานตาม ID
router.get('/:id', authMiddleware.verifyToken, taskController.getTaskById);

// 🔹 POST: สร้างงานใหม่ (เฉพาะ Admin และ Manager)
router.post('/', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin', 'manager']), taskController.createTask);

// 🔹 PUT: อัปเดตสถานะงาน (เฉพาะเจ้าของงานและ Admin)
router.put('/:id', authMiddleware.verifyToken, taskController.updateTask);

// 🔹 DELETE: ลบงาน (เฉพาะ Admin)
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin']), taskController.deleteTask);

module.exports = router;
