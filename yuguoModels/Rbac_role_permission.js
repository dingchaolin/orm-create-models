module.exports = {
  tableName: 'rbac_role_permission',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    role:{},permission:{},id:{},createdAt:{},
  }
};