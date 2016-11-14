module.exports = {
  tableName: 'hospital_user_role',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},name:{},permissions:{},createdAt:{},hospital:{},
  }
};