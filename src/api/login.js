import router from '@/router/index.js';
import cookies from '@/cookies/cookies';
import axios from 'axios';
import { useAlertStore } from '@/stores/alert';
import { useShowStore } from '@/stores/show';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

export async function postLogin(data) {
	const alret = useAlertStore();
	const show = useShowStore();
	async function getToken() {
		console.log('postLogin!!!!!', data);
		try {
			const response = await axios.post(BASE_URL + '/auth/login', data);
			if (response.data.status == 200) {
				console.log('response.data', response.data);
				if (!response.data.data.accessToken) {
					alret.vAlert('잠시 후 다시 이용해주세요.');
					return;
				}
				const token = response.data.data.accessToken;

				cookies.set('accesstoken', token);
				console.log('!!!!!! get access token : ', cookies.get('accesstoken'));
				alret.vSuccess('어서오세요.');
				show.vLogin();
				router.push('/posts');
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
