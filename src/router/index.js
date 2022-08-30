import cookies from '@/cookies/cookies';
import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/views/LoginView.vue';
import Posts from '@/layout/PostsView.vue';
import PostList from '@/views/posts/PostListView.vue';
import PostDetail from '@/views/posts/PostDetailView.vue';
import PostCreate from '@/views/posts/PostCreateView.vue';
import PostEdit from '@/views/posts/PostEditView.vue';
import NotFound from '@/views/NotFound.vue';
import { useAlertStore } from '@/stores/alert';

// roter guard
const routerGuard = (to, next) => {
	const alret = useAlertStore();

	// if 조건에 token 삽입
	console.log('cookise.iskey:::::', cookies.isKey('accesstoken'));
	if (!cookies.isKey('accesstoken')) {
		console.log('if : ' + to.meta.unauhorized);
		router.push('/');
		alret.vAlert('로그인 후 이용해주세요.');
	} else {
		//go to.path
		next;
	}
};

const refresh = () => {
	console.log('ck token!!!', cookies.isKey('accesstoken'));
	cookies.remove();
};

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login,
		meta: { unauhorized: true },
		beforeCreate: refresh,
	},
	{
		path: '/posts',
		name: 'posts',
		component: Posts,
		beforeEnter: routerGuard,
		children: [
			{
				path: '',
				component: PostList,
			},
			{
				path: 'create',
				name: 'postCreate',
				component: PostCreate,
			},
			{
				path: ':seq/edit',
				name: 'postEdit',
				props: true,
				component: PostEdit,
			},
			{
				path: ':seq',
				name: 'postDetail',
				props: true,
				component: PostDetail,
			},
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
