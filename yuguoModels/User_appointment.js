module.exports = {
  tableName: 'user_appointment',
  adapter: 'mysql',
  autoid:false,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id:{},state:{},date:{},time:{},desc:{},type:{},price:{},ygPrice:{},medicalPrice:{},patientName:{},patientIdCode:{},patientPhone:{},patientGender:{},patientBirth:{},order:{},hospital:{},hospitalName:{},doctor:{},doctorName:{},department:{},departmentName:{},user:{},createdAt:{},medicalTotalPrice:{},doctorCancelDesc:{},note:{},payWay:{},refund:{},
  }
};