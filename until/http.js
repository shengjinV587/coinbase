var mainUrl ='https://mshop.21g.cn/api.php/';
// var mainUrl ='http://swancity.iwei7.com/tongji/public/api.php/';

function ajax(url,data,success){
	console.log(mainUrl+url);
	uni.request({
		url:mainUrl+url,
		method: 'POST',
		data:data,
		success:function(res){
			var data = res.data
			success(data);
		},
		fail:function(res){
			console.log('fail');
			success(res);
		}
	})
}
module.exports = {
	ajax:ajax
}