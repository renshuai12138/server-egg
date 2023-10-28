'use strict';

const { Controller } = require('egg');

class CardIdController extends Controller {
  async index() {
    const { ctx } = this;
    const { card } = ctx.request.body;
    const user = await ctx.service.card.get_cardid(card)
    console.log(user)
    if(user == 1) {
        ctx.body = {
            msg: "号码存在",
            type: 1
        }
        return
    }
    if(user == 0){
        ctx.body = {
            msg: "号码可用",
            type: 2
        }
        return
    }

  }

  async update() {
    const { ctx } = this;
    const { openapi, bike_id } = ctx.request.body;
    try {
        await ctx.service.card.update_card(openapi, bike_id)
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

module.exports = CardIdController;
