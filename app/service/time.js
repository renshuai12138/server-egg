'use strict';

const Service = require('egg').Service;
const moment = require("moment")

class TimeService extends Service {
    async get_time() {
        let time = new Date()
        let time2 =  moment(time).format('YYYY-MM-DD HH:mm:ss')
        return time2 
    }

}

module.exports = TimeService;
