import Login from '@/views/LoginView.vue';
import Posts from '@/views/posts/PostsView.vue';
import PostDetail from '@/views/posts/PostDetailView.vue';
import NotFound from '@/views/NotFound.vue';
import cookies from '@/cookies/cookies';
import { createRouter, createWebHistory } from 'vue-router';

// roter guard
const routerGuard = to => {
	// console.log('to: ', to);
	// if 조건에 token 삽입
	console.log('cookise.iskey:::::', cookies.isKey('accesstoken'));
	if (!cookies.isKey('accesstoken')) {
		console.log('if : ' + to.meta.unauhorized);
		router.push('/');
	} else {
		//go to.path
	}
};

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login,
		meta: { unauhorized: true },
	},
	{
		path: '/posts',
		name: 'posts',
		component: Posts,
		beforeEnter: routerGuard,
	},
	{
		path: '/posts/:seq',
		name: 'postDetail',
		props: true,
		component: PostDetail,
		children: [
			// {
			// 	path: 'edit',
			// 	component: PostEdit,
			// },
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
