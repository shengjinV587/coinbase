<template>
	<view class="content">
		<view class="top_box">
			<image class="logo" src="/static/b00_1.png"></image>
			<view class="mine">
				钱包
			</view>
		</view>
		<view class="middle_box bg_F disF fd_C ju_S">
			<view class="font_28u">总资产(USDT)</view>
			<view class="font_36u font_w">2008.0000USDT</view>
		</view>
		<view class="list_title font_28u disF al_C">
			资产列表
		</view>
		<view class="disF al_C width_100 list_box bg_F mar-t30">
			<view class="font_36u font_w flex_1 text_C">USDT</view>
			<view class=" flex_1 disF fd_C font_w">
				<view class="font_32u number">2008.0000USDT</view>
				<view class="font_28u number_f">≈2008.0000USDT</view>
			</view>
		</view>
	</view>
</template>

<script>
	var http = require('../../until/http.js');
	var until = require('../../until/until.js');
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			
		},
		onShow(){

		},
		methods: {
			showData: function() {
				this.isLoading = true;
				const data = this.sendData;
				var self = this;
				http.ajax('Zlxxzyss',data, function(res) {
					self.isLoading = false;
					console.log('Zlxxzyss');
					console.log(res);
					if (res.code == 200) {
						
					}
				})
			},
		}
	}
</script>

<style>
	@import url("wallet.css");
</style>
