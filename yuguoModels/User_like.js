module.exports = {
  tableName: 'user_like',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    user:{},comment:{},id:{},createdAt:{},
  }
};