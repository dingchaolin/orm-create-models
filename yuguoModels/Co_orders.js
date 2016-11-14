module.exports = {
  tableName: 'co_orders',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},actualPrice:{},user:{},status:{},commodityItem:{},payWay:{},paySerialnumber:{},pingAppSerialnumber:{},paymentTime:{},refundRelate:{},operator:{},createdAt:{},
  }
};