import cookies from '@/cookies/cookies.js';
import router from '@/router/index.js';
import axios from 'axios';
// import { useAlert } from '@/compossable/useAlert';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

export function checkToken() {
  if (!cookies.isKey('accesstoken')) {
    router.push('/');
  }
}

export async function getList() {
  try {
    const response = await axios.get(BASE_URL + '/board/all');
    console.log('전체 게시글::::', response.data);

    if (response.data.status == 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getPost(seq) {
  try {
    console.log('getPost Call URL:::::::::::', BASE_URL + '/board/' + seq);
    const response = await axios.get(BASE_URL + '/board/' + seq);

    console.log('게시글 상세::::', response.data.data);

    if (response.data.status == 200) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
  }
}
