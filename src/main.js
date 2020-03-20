import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入eleui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 引入css文件
import "@/assets/css/reset.css"
// 引入api
import api from './api/index'
Vue.prototype.api = api

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')