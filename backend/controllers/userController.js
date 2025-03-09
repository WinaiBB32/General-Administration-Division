const User = require('../models/User');

// 🔹 GET: ดึงข้อมูลผู้ใช้ทั้งหมด
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users", error });
    }
};

// 🔹 GET: ดึงข้อมูลผู้ใช้ตาม ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving user", error });
    }
};

// 🔹 POST: สร้างผู้ใช้ใหม่
exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

// 🔹 PUT: อัปเดตข้อมูลผู้ใช้
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        
        await user.update(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

// 🔹 DELETE: ลบผู้ใช้
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.destroy();
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};
