import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD:src/routes_lcc.js
import Index from '../src/components/Index.vue'//首页
import incubator from '../src/components/incubator.vue'//云创空间首页

=======
import Index from '../src/components/index.vue'//首页
import college from '../src/components/college.vue'//云创学院首页
import activity from '../src/components/activity.vue'//活动详情
import activityList from "../src/components/activityList.vue";//活动列表
import financial from "../src/components/financial.vue";//活动列表
>>>>>>> ef7abfbbd50a6d26870db145571bc7f67216839c:src/routes.js
Vue.use(VueRouter)

const routes = [
	{ path: '/index', component: Index, name: 'Index' },
<<<<<<< HEAD:src/routes_lcc.js
    { path: '/incubator', component: incubator, name: 'incubator' },
=======
	{ path: '/college', component: college, name: 'college' },
	{ path: '/activityList', component: activityList, name: 'activityList' },
	{ path: '/activity', component: activity, name: 'activity' },
	{ path: '/financial', component: financial, name: 'financial' },
>>>>>>> ef7abfbbd50a6d26870db145571bc7f67216839c:src/routes.js
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
		if (store.state.token) {
			window.scrollTo(0, 0);
			next();
		}
		else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	}
	else {
		window.scrollTo(0, 0);
		next();
	}
})
export default router;
