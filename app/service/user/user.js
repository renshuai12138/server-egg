'use strict';

const Service = require('egg').Service;
const moment = require("moment")

class UserService extends Service {
    async get_user(openapi) {
        const { ctx } = this;
        let user = await ctx.model.User.count({
            where: {
                openapi : openapi
            },
            raw:true
        })
        return user 
    }
    async add_user(openapi , username, head_name) {
        const { ctx } = this;
        let psot = 2
        let account_status = 3
        let bike_id_status = 2
        let user = await ctx.model.User.create({
            openapi:openapi,
            post: psot,
            account_status: account_status,
            username: username,
            head_name: head_name,
            bike_id_status: bike_id_status
        })
        return user 
    }
    

}

module.exports = UserService;
