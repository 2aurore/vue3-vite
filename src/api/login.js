import router from '@/router/index.js';
import cookies from '@/cookies/cookies';
import axios from 'axios';
import { useAlertStore } from '@/stores/alert';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

export async function postLogin(data) {
  async function getToken() {
    try {
      const response = await axios.post(BASE_URL + '/auth/login', data);
      // console.log(' login success');
      if (response.data.status == 200) {
        const token = 'Bearer ' + response.data.data.accessToken;

        cookies.set('accesstoken', token);
        console.log(cookies.get('token'));
        router.push('/posts');
      }
    } catch (error) {
      console.log(error.response.data['password']);
      const eorrorMsg = error.response.data['password'];

      console.log(eorrorMsg);
      vAlert(eorrorMsg);
      return false;
    }
  }
  return await getToken();
}
