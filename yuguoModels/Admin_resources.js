module.exports = {
  tableName: 'admin_resources',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},title:{},url:{},parent:{},createdAt:{},
  }
};