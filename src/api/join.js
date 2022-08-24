// 회원가입 data 전달
export function onClickJoin() {
	// console.log(this.$data);
	if (!this.pwSecurityStatus) {
		alert('비밀번호 중복체크를 확인해주세요.');
	} else {
		//회원가입 API 호출
		console.log('회원가입');
	}
}
// password 중복체크
export function onPwSecurityCheck() {
	let pw_1 = this.$data.password;
	let pw_2 = this.$data.passwordCheck;
	if (pw_1 == '' && pw_2 == '') {
		this.$data.pwCheckAlert = '비밀번호를 입력하세요.';
	} else {
		if (pw_1 == pw_2) {
			this.$data.pwCheckAlert = '비밀번호가 일치합니다.';
			this.pwSecurityStatus = true;
			console.log('일치:', this.pwSecurityStatus);
		} else {
			this.$data.pwCheckAlert = '비밀번호가 일치하지 않습니다.';
			this.pwSecurityStatus = false;
			console.log('불일치:', this.pwSecurityStatus);
		}
	}
}
