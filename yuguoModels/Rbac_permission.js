module.exports = {
  tableName: 'rbac_permission',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    target:{},rule:{},id:{},createdAt:{},
  }
};