import cookies from '@/cookies/cookies.js';
import router from '@/router/index.js';
import { useAlertStore } from '@/stores/alert';
import { useShowStore } from '@/stores/show';
import axios from 'axios';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

// use cookie check accesstoken
export function checkToken() {
	if (!cookies.isKey('accesstoken')) {
		router.push('/');
	}
}

// reformat date
export function setDate(str) {
	const date = new Date(str);
	// Date 객체를 한국 표준 날짜로 format
	return date.toLocaleDateString('ko-Kore-KR');
}

// get all post data(board, repliy)
export async function getList(seq) {
	const auth = 'Bearer ' + cookies.get('accesstoken');
	try {
		const response = await axios.get(BASE_URL + '/board/all', {
			headers: { Authorization: auth },
			params: { page: seq },
		});
		console.log('전체 게시글::::', response.data);
		console.log('페이지 :::', seq);
		if (response.data.status == 200) {
			console.log(seq, response.data);
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
	const auth = 'Bearer ' + cookies.get('accesstoken');
	// console.log('postData:::::', postData.content);
	try {
		const response = await axios.post(
			BASE_URL + '/board/',
			{
				content: postData.content,
				title: postData.title,
			},
			{ headers: { Authorization: auth } },
		);

		console.log('authorization::::', auth);
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

// update post
export async function updatePost(form, seq) {
	const alret = useAlertStore();
	const show = useShowStore();
	const auth = 'Bearer ' + cookies.get('accesstoken');
	console.log('form:::::', form);
	try {
		const response = await axios.put(
			BASE_URL + '/board/',
			{
				content: form.content,
				seq: seq,
				title: form.title,
			},
			{ headers: { Authorization: auth } },
		);
		if (response.data.status == 200) {
			alret.vSuccess('게시글이 수정되었습니다.');
			router.back();
		}
	} catch (error) {
		console.log(error);
	}
}

// delete post
export async function deletePost(seq) {
	const alret = useAlertStore();
	const show = useShowStore();
	// const auth = cookies.get('accesstoken');
	try {
		const auth = cookies.get('accesstoken');
		const response = await axios.delete(BASE_URL + '/board/' + seq, {
			headers: { Authorization: auth },
		});
		if (response.data.status == 200) {
			alret.vSuccess('게시글이 삭제되었습니다.');
			show.vLogin();
			router.push('/posts');
		}
	} catch (error) {
		console.log(error);
	}
}
