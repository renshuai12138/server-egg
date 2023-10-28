// 'use strict';

// const { Controller } = require('egg');

// class CollectionRequestController extends Controller {
// 	async index() {
// 		const { ctx } = this;
// 		const { merchant_id, merchant_number_order, merchant_number, USDT, order_amount, asynchronous_address, sync_jump_address, signature, request_time } = ctx.request.body;

// 		//判断商户信息是否正确
// 		const type = await ctx.service.merchant.verify.Verify_Merchant(merchant_id, merchant_number_order, merchant_number)
// 		if (type == false) {
// 			ctx.body = {
// 				status: "failed",
// 				msg: '商户信息不正确',
// 				url: ''
// 			}
// 			return
// 		}
// 		//判断签名是否有效
// 		const isValid = await ctx.service.signature.callback_request(signature)
// 		if(isValid == false){
// 			ctx.body = {
// 				status: "failed",
// 				msg: '当前签名无效',
// 				url: ''
// 			}
// 			return
// 		}

// 		//查询未支付订单条数
// 		const Number = await ctx.service.merchant.verify.Verify_Merchant_Number(merchant_number)
// 		if (Number >= 5) {
// 			ctx.body = {
// 				status: "failed",
// 				msg: '当前客户有5笔订单没有付款',
// 				url: ''
// 			}
// 			return
// 		}
// 		//分配可用地址
// 		//查询冷却地址 
// 		const address = await ctx.service.merchant.verify.burial_address(order_amount)
// 		let addArr = []
// 		if (address.length > 0) {
// 			addArr = addArr.map(x => {
// 				return x.address_id
// 			})
// 			let url = await ctx.service.order.create.automaticPayment(addArr,order_amount)
// 			if(url == ''){
// 				ctx.body = {
// 					status: "failed",
// 					msg: '无可用地址',
// 					url: ''
// 				}
// 				return
// 			}
// 			ctx.body = {
// 				status: "success",
// 				msg: '',
// 				url: address
// 			}
// 			return
// 		}
// 		if(address.length == 0){
// 			let url = await ctx.service.order.create.allautomaticPayment(order_amount)
// 			if(url == ''){
// 				ctx.body = {
// 					status: "failed",
// 					msg: '无可用地址',
// 					url: ''
// 				}
// 				return
// 			}
// 			ctx.body = {
// 				status: "success",
// 				msg: '',
// 				url: address
// 			}
// 			return
// 		}
// 	}
// }

// module.exports = CollectionRequestController;
