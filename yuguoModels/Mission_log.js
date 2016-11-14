module.exports = {
  tableName: 'mission_log',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},user:{},mission:{},oldScore:{},newScore:{},desc:{},createdAt:{},
  }
};