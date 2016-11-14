module.exports = {
  tableName: 'user_admin',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},username:{},role_id:{},createdAt:{},password:{},
  }
};