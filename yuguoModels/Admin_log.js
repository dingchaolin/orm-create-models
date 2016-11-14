module.exports = {
  tableName: 'admin_log',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    user:{},url:{},params:{},method:{},token:{},status:{},id:{},createdAt:{},
  }
};