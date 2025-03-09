const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BorrowRequest = sequelize.define('BorrowRequest', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER },
    equipment_id: { type: DataTypes.INTEGER },
    request_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    return_date: { type: DataTypes.DATE },
    status: { type: DataTypes.ENUM('pending', 'approved', 'borrowed', 'returned', 'overdue', 'rejected') },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = BorrowRequest;
