import cookies from '@/cookies/cookies.js';
import axios from 'axios';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

export async function callPostRepliy(data) {
	const auth = cookies.get('accesstoken');
	console.log('data!!!!!!!', data);
	try {
		const response = await axios.post(
			BASE_URL + '/board/repliy/',
			{
				body: { content: data.content, boardSeq: data.boardSeq },
			},
			{ headers: { Authorization: auth } },
		);

		console.log('call add repliy::::', BASE_URL + '/board/repliy/');
		console.log('댓글 등록::::', response.data);

		if (response.data === 200) {
			return response.data;
		}
	} catch (error) {
		console.log(error);
		return false;
	}
}
