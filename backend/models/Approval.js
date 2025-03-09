const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Approval = sequelize.define('Approval', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER },
    request_type: { type: DataTypes.ENUM('borrow', 'leave', 'budget', 'task_update') },
    status: { type: DataTypes.ENUM('pending', 'approved', 'rejected') },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Approval;

