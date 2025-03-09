const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SystemSetting = sequelize.define('SystemSetting', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    setting_key: { type: DataTypes.STRING },
    setting_value: { type: DataTypes.TEXT },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = SystemSetting;

