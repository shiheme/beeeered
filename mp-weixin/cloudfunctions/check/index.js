const cloud = require('wx-server-sdk')
const axios = require('axios');

cloud.init()

exports.main = async(event, context) => {
	try {
		let buffer = null;
		let ccc = await axios({
			method: 'get',
			url: event.imgData, // imgData是刚才传过来的
			responseType: 'arraybuffer',
			headers: { "Content-Type": "*" }
		}).then(res => {
			buffer = res.data;
		});
		
		console.log('aa', ccc);
		console.log('bb', buffer);
		
		const result = await cloud.openapi.security.imgSecCheck({
			media:{
				contentType: 'image/png',
				value: buffer
			}
		})
		return result
	} catch (err) {
		return err
	}
}