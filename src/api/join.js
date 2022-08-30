import router from '@/router';
import { useAlertStore } from '@/stores/alert';
import axios from 'axios';
// import { ref } from 'vue';

// 회원가입 data 전달
export function onClickJoin(user, security) {
	// console.log(this.$data);
	console.log(this.html);
	if (!security.pwSecurityStatus) {
		alert('비밀번호 중복체크를 확인해주세요.');
	} else {
		//회원가입 API 호출
		console.log('!!!!!! user : ', user);
		newJoinUser(user);
	}
}
// sql 에러로 회원가입 처리 안되는 부분 보완할것
// access API URL
const BASE_URL = 'https://jssampletest.herokuapp.com/api';
export async function newJoinUser(userData) {
	const alret = useAlertStore();
	try {
		console.log('신규 정보 ', userData);
		const response = await axios.post(BASE_URL + '/auth/signup', userData);
		console.log('신규 회원가입 !!!!', response.data);
		if (response.data.status == 200) {
			router.go();
			setTimeout(() => {
				alret.vSuccess('회원가입을 완료하였습니다.');
			}, 1000);
		}
	} catch (error) {
		console.log(error);
		alret.vAlert('잠시 후 다시 시도해주세요.');
	}
}
