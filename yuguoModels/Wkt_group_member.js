module.exports = {
  tableName: 'wkt_group_member',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},group:{},user:{},doctor:{},role:{},status:{},createdAt:{},
  }
};