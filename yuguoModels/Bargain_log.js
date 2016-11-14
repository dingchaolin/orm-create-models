module.exports = {
  tableName: 'bargain_log',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},sponsor:{},participant:{},oldAmount:{},newAmount:{},amount:{},createdAt:{},
  }
};