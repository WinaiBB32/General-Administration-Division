const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Equipment = sequelize.define('Equipment', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT },
    status: { type: DataTypes.ENUM('available', 'borrowed', 'maintenance', 'damaged', 'lost') },
    location: { type: DataTypes.STRING },
    asset_number: { type: DataTypes.STRING, unique: true },
    inventory_number: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = Equipment;
