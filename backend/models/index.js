const User = require('./User');
const Role = require('./Role');
const Task = require('./Task');
const Equipment = require('./Equipment');
const BorrowRequest = require('./BorrowRequest');
const Department = require('./Department');
const Notification = require('./Notification');
const AuditLog = require('./AuditLog');
const Approval = require('./Approval');

// 🔹 Users กับ Roles (1:N)
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

// 🔹 Users กับ Departments (1:N)
User.belongsTo(Department, { foreignKey: 'department_id' });
Department.hasMany(User, { foreignKey: 'department_id' });

// 🔹 Users กับ Tasks (1:N)
User.hasMany(Task, { foreignKey: 'assigned_to' });
Task.belongsTo(User, { foreignKey: 'assigned_to' });

// 🔹 Users กับ Borrow Requests (1:N)
User.hasMany(BorrowRequest, { foreignKey: 'user_id' });
BorrowRequest.belongsTo(User, { foreignKey: 'user_id' });

// 🔹 Equipment กับ Borrow Requests (1:N)
Equipment.hasMany(BorrowRequest, { foreignKey: 'equipment_id' });
BorrowRequest.belongsTo(Equipment, { foreignKey: 'equipment_id' });

// 🔹 Users กับ Notifications (1:N)
User.hasMany(Notification, { foreignKey: 'user_id' });
Notification.belongsTo(User, { foreignKey: 'user_id' });

// 🔹 Users กับ Audit Logs (1:N)
User.hasMany(AuditLog, { foreignKey: 'user_id' });
AuditLog.belongsTo(User, { foreignKey: 'user_id' });

// 🔹 Users กับ Approvals (1:N)
User.hasMany(Approval, { foreignKey: 'user_id' });
Approval.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
    User,
    Role,
    Task,
    Equipment,
    BorrowRequest,
    Department,
    Notification,
    AuditLog,
    Approval,
};
