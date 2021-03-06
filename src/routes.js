import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../src/components/store/store'
import * as types from '../src/components/store/types'
import Index from '../src/components/index.vue'//首页
import college from '../src/components/college.vue'//云创学院首页
import activity from '../src/components/activity.vue'//活动详情
import activityList from "../src/components/activityList.vue";//活动列表
import financial from "../src/components/financial.vue";//云创金融首页
import financialList from "../src/components/financialList.vue";//云创金融(融资项目或投资机构列表页)
import investor from "../src/components/investor.vue";//云创金融详情页
import incubator from "../src/components/incubator.vue";//孵化器详情页
import register from '../src/components/register/register.vue'//注册组件
import login from '../src/components/register/login.vue'//登录组件
import forms from '../src/components/forms.vue'//表单集合
import personalCenter from '../src/components/personalCenter/personalCenter.vue'//个人中心首页
import apply from '../src/components/personalCenter/apply.vue'//个人中心申请表格


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
    { path: '/activity/:id', component: activity, name: 'activity' },
    { path: '/financial', component: financial, name: 'financial' },
    { path: '/financialList/:type', component: financialList, name: 'financialList' },
    { path: '/investor/:type/:id', component: investor, name: 'investor' },
    { path: '/register', component: register, name: 'register' },
    { path: '/login', component: login, name: 'login' },
    { path: '/forms', component: forms, name: 'forms' },
    {
        path: '/personalCenter', component: personalCenter, name: 'personalCenter',
        children: [
            { path: '/apply/:type', component: apply, name: 'apply', hidden: true },]
    },


    { path: '/incubator/:id', component: incubator, name: 'incubator' },
    { path: '/incubatorsList', component: incubatorsList, name: 'incubatorsList' },
    { path: '/incubators', component: incubators, name: 'incubators' },
    { path: '/seed/:id', component: seed, name: 'seed' },
    {path: '/hatchedList', component: hatchedList, name: 'hatchedList'},
    {path: '/enterprise/:id', component: enterprise, name: 'enterprise'},
    { path: '/service', component: service, name: 'service' },
    { path: '/serviceDetail/:id', component: serviceDetail, name: 'serviceDetail' },
    { path: '/news', component: news, name: 'news' },
    { path: '/article/:id', component: article, name: 'article' },
];
// 页面刷新时，重新赋值token

if (window.localStorage.getItem('userinfo')) {
	store.commit(types.USERINFO, window.localStorage.getItem('userinfo'))
}

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