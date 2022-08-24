import cookies from '@/cookies/cookies';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Posts from '@/views/posts/PostsView.vue';
import PostDetail from '@/views/posts/PostDetailView.vue';
import PostCreate from '@/views/posts/PostCreateView.vue';
import PostEdit from '@/views/posts/PostEditView.vue';
import NotFound from '@/views/NotFound.vue';
import { useAlertStore } from '@/stores/alert';

// roter guard
const routerGuard = to => {
	const alret = useAlertStore();

	// if 조건에 token 삽입
	console.log('cookise.iskey:::::', cookies.isKey('accesstoken'));
	if (!cookies.isKey('accesstoken')) {
		console.log('if : ' + to.meta.unauhorized);
		router.push('/');
		alret.vAlert('로그인 후 이용해주세요.');
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
		path: '/posts/create',
		name: 'postCreate',
		component: PostCreate,
		beforeEnter: routerGuard,
	},
	{
		path: '/posts/:seq/edit',
		name: 'postEdit',
		component: PostEdit,
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
