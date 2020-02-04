<template>
	<view class="content pad-30">
		<view class="bg_F width_100 top_box pad-20">
			<view class="font_30u">USDT</view>
			<view class="mar-t40 font_36u font_w">2008.0000<span class="font_24u">USDT</span></view>
			<view class="disF mar-t20 font_28u ju_S">
				<view class=" font_w">≈2008.00USDT</view>
				<view>单价=1:1.0000U</view>
			</view>
		</view>
		<view class="disF ju_S width_100 mar-t30">
			<view class="tranfer disF al_C ju_C">
				<image src="../../static/s11.png"></image>
				<view class="font_28u mar-l20">转账</view>
			</view>
			<view class="collection disF al_C ju_C">
				<image src="../../static/s10.png"></image>
				<view class="font_28u mar-l20">收款</view>
			</view>
		</view>
		<uni-segmented-control class="width_100 mar-t40" :current="current" :values="items" :style-type="styleType" :active-color="activeColor" @clickItem="onClickItem" />
		<view class="width_100 pad-20 bg_F main_box mar-t30">
			<view class="width_100 font_28u border_bot">
				<view class="disF ju_S al_C">
					<text>内部转账</text>
					<text>-4000.0000</text>
				</view>
				<view class="disF ju_S mar-t20 al_C">
					<text>内部转出</text>
					<text class="font_24u">2019-10-07  15:39:42</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '../../components/uni-segmented-control/uni-segmented-control.vue';
	export default {
		data() {
			return {
				items: [
					'全部',
					'转出',
					'转入'
				],
				styles: [{
					value: 'button',
					text: '按钮',
					checked: true
				}, {
					value: 'text',
					text: '文字'
				}],
				colors: [
					'#007aff',
					'#4cd964',
					'#dd524d'
				],
				current: 0,
				colorIndex: 0,
				activeColor: '#787DF1',
				styleType: 'button'
			}
		},
		components: {
			uniSegmentedControl
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
	@import url("bill.css");
</style>
