const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Task = sequelize.define('Task', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    assigned_to: { type: DataTypes.INTEGER },
    created_by: { type: DataTypes.INTEGER },
    priority: { type: DataTypes.ENUM('low', 'medium', 'high', 'urgent') },
    status: { type: DataTypes.ENUM('pending', 'in_progress', 'completed', 'overdue') },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Task;
