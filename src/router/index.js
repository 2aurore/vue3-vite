import cookies from '@/cookies/cookies';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Posts from '@/views/posts/PostsView.vue';
import PostDetail from '@/views/posts/PostDetailView.vue';
import PostCreate from '@/views/posts/PostCreateView.vue';
import PostEdit from '@/views/posts/PostEditView.vue';
import NotFound from '@/views/NotFound.vue';

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
		path: '/posts',
		name: 'posts',
		component: PostEdit,
		beforeEnter: routerGuard,
	},
	{
		path: '/posts',
		name: 'posts',
		component: PostCreate,
		beforeEnter: routerGuard,
	},
	{
		path: '/posts/:seq',
		name: 'postDetail',
		props: true,
		component: PostDetail,
		children: [
			// {
			// 	path: '/',
			// 	component: Replies,
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
