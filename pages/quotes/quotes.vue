<template>
	<view>

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
	@import url("");
</style>
