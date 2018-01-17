import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../src/components/index.vue'//首页
import college from '../src/components/college.vue'//云创学院首页
import activity from '../src/components/activity.vue'//活动详情
import activityList from "../src/components/activityList.vue";//活动列表
import financial from "../src/components/financial.vue";//云创金融首页
import financialList from "../src/components/financialList.vue";//云创金融(融资项目或投资机构列表页)
import incubator from "../src/components/incubator.vue";//孵化器详情页
import register from '../src/components/register/register.vue'//注册组件
import login from '../src/components/register/login.vue'//登录组件
import forms from '../src/components/forms.vue'//表单集合

import incubatorsList from "../src/components/incubatorsList.vue";//孵化器列表
import incubators from "../src/components/incubators.vue";//云创空间首页
import seed from "../src/components/seed.vue";//孵化项目详情
import hatchedList from "../src/components/hatchedList.vue";//入孵企业列表页
import enterprise from "../src/components/enterprise.vue";//入孵企业详情页
import service from "../src/components/service.vue";//云创服务首页
import serviceDetail from "../src/components/serviceDetail.vue";//服务详情页
import news from "../src/components/news.vue";//资讯中心首页
import article from "../src/components/article.vue";//资讯详情页

Vue.use(VueRouter)

const routes = [
	{ path: '/index', component: Index, name: 'index' },
	{ path: '/college', component: college, name: 'college' },
	{ path: '/activityList/:type', component: activityList, name: 'activityList' },
	{ path: '/activity', component: activity, name: 'activity' },
	{ path: '/financial', component: financial, name: 'financial' },
	{ path: '/register', component: register, name: 'register' },
	{ path: '/login', component: login, name: 'login' },
	{ path: '/forms', component: forms, name: 'forms' },

    { path: '/incubator/:id', component: incubator, name: 'incubator' },
    { path: '/incubatorsList', component: incubatorsList, name: 'incubatorsList' },
    { path: '/incubators', component: incubators, name: 'incubators' },
    { path: '/seed', component: seed, name: 'seed' },
    {path: '/hatchedList', component: hatchedList, name: 'hatchedList'},
    {path: '/enterprise', component: enterprise, name: 'enterprise'},
    { path: '/service', component: service, name: 'service' },
    { path: '/serviceDetail', component: serviceDetail, name: 'serviceDetail' },
    { path: '/news', component: news, name: 'news' },
    { path: '/article', component: article, name: 'article' },
];
// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
// 	store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }
// if (window.localStorage.getItem('userinfo')) {
// 	store.commit(types.USERINFO, window.localStorage.getItem('userinfo'))
// }

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'hash',
    base: __dirname,
    routes: routes
});
router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        // if (store.state.token) {
        //     window.scrollTo(0, 0);
        //     next();
        // }
        // else {
        //     next({
        //         path: '/login',
        //         query: { redirect: to.fullPath }
        //     })
        // }
    }
    else {
        window.scrollTo(0, 0);
        next();
    }
})
export default router;