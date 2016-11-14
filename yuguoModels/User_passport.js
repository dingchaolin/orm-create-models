module.exports = {
  tableName: 'user_passport',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    protocol:{},provider:{},identifier:{},password:{},tokens:{},user:{},id:{},createdAt:{},
  }
};