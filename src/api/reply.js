import cookies from '@/cookies/cookies.js';
import axios from 'axios';

const BASE_URL = 'https://jssampletest.herokuapp.com/api';

export async function callPostRepliy(data) {
	const auth = 'Bearer ' + cookies.get('accesstoken');

	try {
		let intseq = parseInt(data.boardSeq);

		const response = await axios.post(
			BASE_URL + '/board/reply',
			{ content: data.content, boardSeq: intseq },
			{ headers: { Authorization: auth } },
		);

		if (response.data.status == 200) {
			return response.data;
		} else {
			console.log(response.data);
			return false;
		}
	} catch (error) {
		console.log(error);
	}
}
