import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
// import segmented from 'components/uni-segmented-control/uni-segmented-control.vue';
// Vue.component('segmented-box',segmented);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
