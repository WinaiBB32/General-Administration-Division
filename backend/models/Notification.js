const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notification = sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER },
    message: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('unread', 'read') },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Notification;
