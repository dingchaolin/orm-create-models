module.exports = {
  tableName: 'user_account_legacy',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},createdAt:{},uid:{},username:{},password:{},email:{},salt:{},weibo:{},qq:{},
  }
};