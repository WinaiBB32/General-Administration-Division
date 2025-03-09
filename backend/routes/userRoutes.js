const express = require('express');
const router = express.Router();
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

router.get('/', authenticate, authorize('Admin', 'Manager'), userController.getAllUsers);
router.get('/:id', authenticate, authorize('Admin', 'Manager', 'User'), userController.getUserById);
router.post('/', authenticate, authorize('Admin'), userController.createUser);
router.put('/:id', authenticate, authorize('Admin'), userController.updateUser);
router.delete('/:id', authenticate, authorize('Admin'), userController.deleteUser);

module.exports = router;
