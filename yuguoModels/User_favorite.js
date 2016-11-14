module.exports = {
  tableName: 'user_favorite',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    user:{},hospital:{},doctor:{},id:{},createdAt:{},
  }
};