module.exports = {
  tableName: 'ins_plan_hospital_copy',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},hospital:{},createdAt:{},delay:{},percent:{},insurance:{},city:{},floating:{},
  }
};