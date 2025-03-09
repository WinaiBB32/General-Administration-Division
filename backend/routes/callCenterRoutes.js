const express = require('express');
const router = express.Router();
const callCenterController = require('../controllers/callCenterController');
const authMiddleware = require('../middlewares/authMiddleware');

// 🔹 GET: ดูรายการบันทึกการโทร (เฉพาะ Call Center Agent และ Admin)
router.get('/', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin', 'call_center']), callCenterController.getAllCallLogs);

// 🔹 GET: ดูรายละเอียดการโทรตาม ID
router.get('/:id', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin', 'call_center']), callCenterController.getCallLogById);

// 🔹 POST: บันทึกการโทร (เฉพาะ Call Center Agent)
router.post('/', authMiddleware.verifyToken, authMiddleware.verifyRole(['call_center']), callCenterController.createCallLog);

// 🔹 PUT: อัปเดตสถานะการโทร (เฉพาะ Call Center Agent และ Admin)
router.put('/:id', authMiddleware.verifyToken, authMiddleware.verifyRole(['call_center', 'admin']), callCenterController.updateCallLog);

// 🔹 DELETE: ลบข้อมูลการโทร (เฉพาะ Admin)
router.delete('/:id', authMiddleware.verifyToken, authMiddleware.verifyRole(['admin']), callCenterController.deleteCallLog);

module.exports = router;
