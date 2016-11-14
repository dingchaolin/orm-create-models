module.exports = {
  tableName: 'sails_migrations',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},name:{},batch:{},migration_time:{},
  }
};