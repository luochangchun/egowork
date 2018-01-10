import Vue from 'vue'
import api from './axios/api'
import ElementUI from 'element-ui'
import '../static/css/reset.css'
import '../static/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'
<<<<<<< HEAD
import router from './routes_lcc.js'
=======
import '../static/css/main.css'
import router from './routes.js'
>>>>>>> ef7abfbbd50a6d26870db145571bc7f67216839c
import App from './App'
// import router from '../config/routes_lcc.js'



Vue.use(ElementUI)

// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.api = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  api,
  render: h => h(App)
})
