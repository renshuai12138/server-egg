'use strict';

const Service = require('egg').Service;
const moment = require("moment")

class UserService extends Service {
    async get_user_number(openapi) {
        const { ctx } = this;
        let user = await ctx.model.User.count({
            where: {
                openapi : openapi
            },
            raw:true
        })
        return user 
    }



    async get_user(openapi) {
        const { ctx } = this;
        let user = await ctx.model.User.findAll({
            where: {
                openapi : openapi
            },
            raw:true
        })
        return user 
    }


    async add_user(openapi , head_name, username) {
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

    async get_user_all(size,index) {
        const { ctx } = this;
        let user = await ctx.model.User.findAll({
            attributes: {exclude: ['openapi']}
        },{
            where: {
                post: 0
            }
        })
        return user 
    }

    async update_user(openapi, head_name, phone_number, username, nick_name, sex, age, loca, delivery_address, accident_status, em_contact, em_phone, em_relation, remark) {
        const { ctx } = this;
        let account_status = 1
        let user = await ctx.model.User.update({
            account_status: account_status,
            username: username,
            phone_number: phone_number,
            head_name: head_name,
            nick_name: nick_name,
            sex: sex,
            age: age,
            loca: loca,
            delivery_address: delivery_address,
            accident_status: accident_status,
            em_contact: em_contact,
            em_phone: em_phone,
            em_relation: em_relation,
            remark: remark,
        },{
            where:{
                openapi:openapi,
            },
        })
        return user 
    }

    async amd_update_user(uid, post, bike_id_status) {
        const { ctx } = this;
        let account_status = 1
        let user = await ctx.model.User.update({
            post: post,
            bike_id_status: bike_id_status,
        },{
            where:{
                uid:uid,
            },
        })
        return user 
    }

    
}

module.exports = UserService;
