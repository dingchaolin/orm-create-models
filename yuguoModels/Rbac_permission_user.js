module.exports = {
  tableName: 'rbac_permission_user',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    user:{},permission:{},id:{},createdAt:{},
  }
};