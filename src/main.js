import Vue from 'vue'
import api from './axios/api'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/ani.css'
import '../static/css/common.css'
import '../static/css/main.css'
import router from './routes.js'
import App from './App'




Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  api,
  render: h => h(App)
})
