import cookies from '@/cookies/cookies';
import { useAlertStore } from '@/stores/alert.js';
import { useShowStore } from '@/stores/show.js';
import { checkToken } from './posts.js';

// logout 시 accesstoken 삭제
export function goLogout() {
	const show = useShowStore();
	console.log(cookies.remove('accesstoken'));
	console.log(cookies.get('accesstoken'));

	checkToken();
	useAlertStore().vSuccess('로그아웃 되었습니다.');
	show.vLogout();
}
