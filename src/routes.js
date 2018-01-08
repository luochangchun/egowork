import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../src/components/Index.vue'//首页
Vue.use(VueRouter)

const routes = [
	{ path: '/index', component: Index, name: 'Index' },
	
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
