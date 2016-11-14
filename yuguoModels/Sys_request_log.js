module.exports = {
  tableName: 'sys_request_log',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    identity:{},method:{},statusCode:{},path:{},responseTime:{},ip:{},userAgent:{},request:{},response:{},id:{},createdAt:{},user:{},deviceToken:{},city:{},
  }
};