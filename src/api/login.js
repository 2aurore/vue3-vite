import router from '@/router/index.js';
import cookies from '@/cookies/cookies';
import axios from 'axios';
import { useAlertStore } from '@/stores/alert';
import { useShowStore } from '@/stores/show';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

export async function postLogin(data) {
	async function getToken() {
		const alret = useAlertStore();
		const show = useShowStore();
		try {
			const response = await axios.post(BASE_URL + '/auth/login', data);
			// console.log(' login success');
			if (response.data.status == 200) {
				const token = 'Bearer ' + response.data.data.accessToken;

				cookies.set('accesstoken', token);
				console.log(cookies.get('token'));
				alret.vSuccess('어서오세요.');
				router.push('/posts');
				show.vLogin();
			}
		} catch (error) {
			// console.log(error.response.data['password']);
			console.log(error);

			let errorMsg = '';

			if (error.response.data['password']) {
				// errorMsg = 'password는 ' + error.response.data['password'];
				errorMsg = '로그인 정보를 확인해주세요.';
			} else {
				errorMsg = '잠시 후 다시 시도해주세요.';
			}

			// console.log(eorrorMsg);
			alret.vAlert(errorMsg);
			return false;
		}
	}
	return await getToken();
}
