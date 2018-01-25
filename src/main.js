import Vue from 'vue'
import App from './App'
import store from '../src/components/store/store'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../static/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/ani.css'
import '../static/css/common.css'
import '../static/css/main.css'
import router from './routes.js'

import { outGet } from './utils/api'//请求外链，不加baseUrl
import { getRequest } from './utils/api'
import { postRequest } from './utils/api'
import { deleteRequest } from './utils/api'
import { putRequest } from './utils/api'
import './utils/filter_utils'


Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.prototype.outGet = outGet;
Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.putRequest = putRequest;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
