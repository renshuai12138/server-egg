'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    // let body = JSON.parse(ctx.request.body) 
    const { openapi, head_name ,username } = ctx.request.body;
    console.log(ctx.request.body)
    const users = await ctx.service.user.get_user_number(openapi)
    if(users == 0) {
       await ctx.service.user.add_user(openapi,head_name,username)
    }

    const user = await ctx.service.user.get_user(openapi)
    ctx.body = {
      code: 0,
      data: user[0]
    }


  }

  async getall() {
    const { ctx } = this;
    const { size,index } = ctx.query;

    const user = await ctx.service.user.get_user_all(size,index)

    ctx.body = {
      user
    }

  }



  async getadmall() {
    const { ctx } = this;
    const { size,index } = ctx.query;

    const user = await ctx.service.user.get_user_all(size,index)

    ctx.body = {
      user
    }

  }

  

  async update() {
    const { ctx } = this;
    const { openapi, head_name, phone_number, username, nick_name, sex, age, loca, delivery_address, accident_status, em_contact, em_phone, em_relation, remark} = ctx.request.body;
    try {
      await ctx.service.user.update_user(openapi, head_name, phone_number, username, nick_name, sex, age, loca, delivery_address, accident_status, em_contact, em_phone, em_relation, remark)
      ctx.body = {
        code: 0,
        msg: "修改成功",
        type: 2
      }
    } catch (error) {
      ctx.body = {
        code: 0,
        msg: "修改失败",
        type: 1
      }
    }
  }

  async amdupdate() {
    const { ctx } = this;
    const {uid, post, bike_id_status} = ctx.request.body;
    try {
      await ctx.service.user.update_user(uid, post, bike_id_status)
      ctx.body = {
        msg: "修改成功",
        type: 2
      }
    } catch (error) {
      ctx.body = {
        msg: "修改失败",
        type: 1
      }
    }
  }


  
}

module.exports = UserController;
