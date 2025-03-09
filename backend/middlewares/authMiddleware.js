const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Role = require('../models/Role');

exports.authenticate = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ success: false, message: 'Access Denied' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
        req.user = await User.findByPk(decoded.id, { include: Role });
        if (!req.user) {
            return res.status(401).json({ success: false, message: 'Invalid Token' });
        }
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid Token' });
    }
};

// เช็คบทบาทผู้ใช้
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.Role.role_name)) {
            return res.status(403).json({ success: false, message: 'Forbidden' });
        }
        next();
    };
};
