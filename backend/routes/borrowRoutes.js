const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');
const authMiddleware = require('../middlewares/authMiddleware');

// 🔹 GET: ดูคำขอยืมอุปกรณ์ทั้งหมด (เฉพาะ Admin และ Approver)
router.get('/', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin', 'approver']), borrowController.getAllBorrowRequests);

// 🔹 GET: ดูรายละเอียดคำขอยืมตาม ID
router.get('/:id', authMiddleware.verifyToken, borrowController.getBorrowRequestById);

// 🔹 POST: ขอใช้อุปกรณ์ (เฉพาะ User)
router.post('/', authMiddleware.verifyToken, authMiddleware.verifyRole(['user']), borrowController.createBorrowRequest);

// 🔹 PUT: อัปเดตสถานะการยืม (เฉพาะ Approver และ Admin)
router.put('/:id', authMiddleware.verifyToken, authMiddleware.verifyRole(['approver', 'admin']), borrowController.updateBorrowStatus);

// 🔹 DELETE: ยกเลิกคำขอยืม (เฉพาะผู้ขอยืม และ Admin)
router.delete('/:id', authMiddleware.verifyToken, borrowController.cancelBorrowRequest);

module.exports = router;
