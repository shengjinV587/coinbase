<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*每个页面公共css */
	page{
		background-color: #F7F7F9;
	}
	.uni-mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, .3);
	}
	.disF{
		display: flex;
	}
	::-webkit-scrollbar {
	   width: 0;
	   height: 0;
	   color: transparent;
	}
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
		background-color:transparent;
		/* border: #29A2E9 1upx solid; */
		box-sizing: border-box;
	}
	.top_view{
	    height: var(--status-bar-height);
	    width: 100%;
	    position: fixed;
	    top: 0;
	}
	.bg_F{
		background-color: #FFFFFF;
	}
	.mar-t10{
		margin-top: 10upx;
	}
	.mar-t20{
		margin-top: 20upx;
	}
	.mar-t30{
		margin-top: 30upx;
	}
	.mar-t40{
		margin-top: 40upx;
	}
	.mar-l20{
		margin-left: 20upx;
	}
	.pad-30{
		padding: 30upx;
		box-sizing: border-box;
	}
	.pad-20{
		padding: 20upx;
		box-sizing: border-box;
	}
	.pad-b10{
		padding-bottom: 10upx;
	}
	.pad-b20{
		padding-bottom: 20upx;
	}
	.fontC_G9{
		color: #999999;
	}
	.fontC_G6{
		color: #666666;
	}
	.fd_C{
		flex-direction: column;
		display: flex;
	}
	.font_48u{
		font-size: 48upx !important;
	}
	.font_36u{
		font-size: 36upx !important;
	}
	.font_34u{
		font-size: 34upx !important;
	}
	.font_32u{
		font-size: 32upx !important;
	}
	.font_30u{
		font-size: 30upx !important;
	}
	.font_28u{
		font-size: 28upx !important;
	}
	.font_24u{
		font-size: 24upx !important;
	}
	.flex_1{
		flex: 1;
	}
	.flex_2{
		flex: 2;
	}
	.flex_3{
		flex: 3;
	}
	.flex_05{
		flex: 0.5;
	}
	.font_w{
		font-weight: bold;
	}
	.ju_C{
		justify-content: center;
	}
	.ju_S{
		justify-content: space-between;
	}
	.ju_E{
		justify-content: flex-end !important;
	}
	.row_1{
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		align-content: center;
	}
	.al_C{
		align-items: center;
	}
	.text_C{
		text-align: center;
	}
	.border_bot{
		border-bottom: 1upx #EDEDED solid;
	}
	.border_left{
		border-left: 1upx #E1E1E1 solid;
	}
	.buttonB{
		color: #FFFFFF;
		background:linear-gradient(to right,#0e6aa2,#3599db);
		width: 90%;
	}
	.width_100{
		width: 100%;
	}
	
</style>
