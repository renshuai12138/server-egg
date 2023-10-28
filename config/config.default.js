/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1688956033340_171';

  // add your middleware config here
  config.middleware = [];
  config.security = {
		csrf:{
			enable:false
		  }
	};
	config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };


  config.sequelize = {
    dialect: 'mysql',//数据库类型
      host: '127.0.0.1',//链接地址
      port: 3306,//端口
      database: 'shuzibi',//数据库名称
      username: 'root',//用户名
      password: '3306',//密码
      define: {
      underscored: false,
      //使用自定义表名
      freezeTableName: true,
      //去掉默认的添加时间和更新时间
      timestamps: false, 
      },
      dialectOptions: {
        options: { "requestTimeout": 300000 }//超时时间
      },
      timezone: '+08:00',//时区
   }

   config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '100kb',
    jsonLimit: '1000000kb',
    strict: true,
    queryString: {
        arrayLimit: 100,
        depth: 5,
        parameterLimit: 1000,
    },
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
        text: ['text/xml', 'application/xml', 'application/json'],
    },
}



  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
