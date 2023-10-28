'use strict';

const Service = require('egg').Service;
const moment = require("moment")

class UserService extends Service {
    async get_cardid(id) {
        const { ctx } = this;
        let user = await ctx.model.User.count({
            where: {
                bike_id : id,
            },
            raw:true
        })
        return user 
    }

    async update_card(openapi, bike_id) {
        const { ctx } = this;
        let user = await ctx.model.User.update({
            bike_id: bike_id
        },{
            where: {
                accident_status: 1,
                openapi : openapi,
            },
            raw:true
        })
        return user 
    }

    


    
}

module.exports = UserService;
