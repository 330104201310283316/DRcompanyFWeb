import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import './assets/css/global.css' /*引入公共样式*/
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import {message} from 'ant-design-vue';
// 引入Input样式
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueScrollTo from 'vue-scrollto';


Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(VueMaterial)
Vue.use(VueScrollTo)
Vue.prototype.$message = message;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')

