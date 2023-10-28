'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //帅帅
  const { router, controller } = app;
  router.get('/', controller.home.index);

  //查询所有用户
  router.get('/userall', controller.user.getall);
  //查询所有领队
  router.get('/admuserall', controller.user.getadmall);
  

  //查询号码是否可用
  router.get('/card', controller.cardid.index);
  //添加号码
  router.post('/updatecard', controller.cardid.update);

  //修改用户权限
  router.post('/amd/updatecard', controller.user.amdupdate);

  //(查询有无) 没有的话新建用户
  router.post('/user', controller.user.index);
  //完善用户信息
  router.post('/updateuser', controller.user.update);

};
