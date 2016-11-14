module.exports = {
  tableName: 'hospital_user',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},loginName:{},passWord:{},role:{},hospital:{},createdAt:{},
  }
};