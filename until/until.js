var isGift = true;
var access_token = uni.getStorageSync('accessToken');
// var access_token = '3976046c606a17e1d9b35dbdf9653087';

var user_token = uni.getStorageSync('userToken');
// var user_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3eFNob3AiLCJpYXQiOjE1NzEyMTU0NzMsImV4cCI6MTU3MTgyMDI3MywiYXVkIjoiT25lQmFzZSIsInN1YiI6Ik9uZUJhc2UiLCJkYXRhIjp7ImlkIjoyNjMsImxhc3RfdGltZSI6MTU3MTIxNTQ3NCwibmlja25hbWUiOiJcdTZlZjRcdTZlZjRcdTZlZjQiLCJtb2JpbGUiOiIxNTc1NzgzNDc0NCJ9fQ.w1BpS_DOuGxZhy2ID9kLZsjPu-fcOqTdpr3pUAbYyew';
var appId = '';
var addrId = 0;
var code = '';
var wxShareCode = 0;
// console.log = function(){}
module.exports = {
	isGift:isGift,
	access_token:access_token,
	appId:appId,
	addrId:addrId,
	user_token:user_token,
	code:code,
	wxShareCode:wxShareCode
}
