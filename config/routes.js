import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../src/components/Index.vue'//首页
import incubators from '../src/components/incubators.vue'
import incubators_detail from '../src/components/incubators_detail.vue'



Vue.use(VueRouter)
const routes = [
    {path: '/index', component: Index, name: 'Index'},//首页
    {path: '/incubators', component: incubators, name: 'incubators'},//云创孵化首页
    {path: '/incubators_detail', component: incubators_detail, name: 'incubators_detail'},//云创孵化详情页
];

export default new VueRouter({
    linkActiveClass: 'active',
    mode: 'hash',
    base: __dirname,
    routes:routes
})
