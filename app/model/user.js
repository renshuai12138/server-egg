//收款、付款表

module.exports = app => {
    const DataTypes = app.Sequelize;
  
    const Model = app.model.define('user', {
      //
      uid: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      openapi: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //超级管理员00/管理01/领队02/用户02
      post: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      //正常01/冻结02/未激活03
      account_status: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      //微信名称
      username: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      //手机号
      phone_number: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //昵称
      nick_name: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      //性别
      sex: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      //年龄
      age: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
      },
      //位置
      loca: {
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      //默认获取微信头像，后期可修改
      head_name:{
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //收货地址
      delivery_address:{
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //车牌号
      bike_id:{
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
       //车牌号状态/01未激活/02激活
      bike_id_status:{
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      //参与活动次数
      join_number:{
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      //热度
      hot_number:{
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue:0
      },
      //意外险状态
      accident_status:{
        type: DataTypes.STRING(64),
        allowNull: true,
      },
      //紧急联系人姓名
      em_contact: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //紧急联系人电话
      em_phone: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //紧急联系人与本人关系
      em_relation: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      //介绍
      remark: {
        type: DataTypes.STRING(64),
        allowNull: true
      },
      build_time: {
        type: DataTypes.DATE,
        allowNull: true,
         defaultValue: DataTypes.NOW
      },
      create_time: {
        type: DataTypes.DATE,
        allowNull: true,
         defaultValue: DataTypes.NOW
      },
      update_time: {
        type: DataTypes.DATE,
        allowNull: true,
         defaultValue: DataTypes.NOW
      }
    }, {
      tableName: 'user',
      //使用自定义表名
      freezeTableName: true,
      //去掉默认的添加时间和更新时间
      timestamps: false, 
    });
  
    Model.associate = function() {
  
    }
    (async function(){
        await Model.sync();
    }())

  
    return Model;
  };