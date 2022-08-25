import cookies from '@/cookies/cookies.js';
import router from '@/router/index.js';
import { useAlertStore } from '@/stores/alert';
import { useShowStore } from '@/stores/show';
import axios from 'axios';
import { ref } from 'vue';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

// use cookie check accesstoken
export function checkToken() {
	if (!cookies.isKey('accesstoken')) {
		router.push('/');
	}
}

// set axios custom params
const params = ref({
	_sort: 'createDate',
	_order: 'desc',
	_limit: 6,
});

// reformat date
export function setDate(str) {
	const date = new Date(str);
	// Date 객체를 한국 표준 날짜로 format
	return date.toLocaleDateString('ko-Kore-KR');
}

// get all post data(board, repliy)
export async function getList() {
	const auth = cookies.get('accesstoken');
	try {
		const response = await axios.get(BASE_URL + '/board/all', {
			params: params,
			headers: { Authorization: auth },
		});
		// const response = await axios.get(BASE_URL + '/board/all');
		console.log('authorization::::', cookies.get('accesstoken'));
		console.log('전체 게시글::::', response.data);

		if (response.data.status == 200) {
			return response.data.data;
		}
	} catch (error) {
		console.log(error);
	}
}

// get 1 post by id:seq
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

// create new post
export async function createPost(postData) {
	const alret = useAlertStore();
	const show = useShowStore();
	const auth = cookies.get('accesstoken');
	console.log('postData:::::', postData);
	try {
		const response = await axios.post(
			BASE_URL + '/board/',
			{
				data: postData,
			},
			{ headers: { Authorization: auth } },
		);

		console.log('authorization::::', cookies.get('accesstoken'));
		console.log('게시글 등록::::', response.data);

		if (response.data.status == 200) {
			alret.vSuccess('작성한 게시글이 등록되었습니다.');
			show.vLogin();
			router.push('/posts');
		}
	} catch (error) {
		console.log(error);
	}
}

export async function updatePost(postdata) {
	const alret = useAlertStore();
	const show = useShowStore();
	const auth = cookies.get('accesstoken');
	console.log('postData:::::', postdata);
	try {
		const response = await axios.put(
			BASE_URL + '/board/',
			{
				data: postdata,
			},
			{ headers: { Authorization: auth } },
		);
		if (response.data.status == 200) {
			alret.vSuccess('작성한 게시글이 등록되었습니다.');
			show.vLogin();
			router.push('/posts');
		}
	} catch (error) {
		console.log(error);
	}
}
