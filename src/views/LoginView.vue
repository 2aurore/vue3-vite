<template>
	<!-- Modal -->
	<div
		class="modal fade"
		id="staticBackdrop"
		data-bs-backdrop="static"
		data-bs-keyboard="false"
		tabindex="-1"
		aria-labelledby="staticBackdropLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
				</div>
				<div class="modal-body">
					<div class="form">
						<ul>
							<li>email <input type="email" v-model="joinFormData.email" /></li>
							<li>name <input v-model="joinFormData.name" /></li>
							<li>
								password
								<input type="password" v-model="joinFormData.password" />
							</li>
							<li>
								<input type="password" v-model="security.passwordCheck" />
							</li>
							<li>
								<span class="me-1" style="font-size: small">{{
									security.pwCheckAlert
								}}</span>
								<v-btn
									small
									@click.prevent="onPwSecurityCheck"
									class="btn btn-light"
									>password check</v-btn
								>
							</li>
							<li>city <input v-model="joinFormData.city" /></li>
							<li>street <input v-model="joinFormData.street" /></li>
							<li>post code <input v-model="joinFormData.zipcode" /></li>
						</ul>
					</div>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						취소
					</button>
					<button
						type="button"
						class="btn btn-primary"
						@click.prevent="onClickJoin(joinFormData, security)"
					>
						가입
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- default login layout -->
	<div>
		<div class="card">
			<div class="container">
				<h2 class="text-center mt-3 mb-3">Welcome!</h2>
				<label for="userEmail"><b>E-mail</b></label>
				<input
					class="login"
					type="text"
					placeholder="Enter E-mail"
					name="userEmail"
					v-model="loginInfo.email"
					@focus="onFocus"
					required
				/>

				<label for="psw"><b>Password</b></label>
				<input
					class="login"
					type="password"
					placeholder="Enter Password"
					name="psw"
					v-model="loginInfo.password"
					required
				/>
				<div class="d-grid gap-2 mt-3">
					<button
						type="submit"
						class="btn btn-primary btn-lg"
						@click="loginSubmit(loginInfo)"
					>
						Login
					</button>
				</div>
				<!-- <label>
					<input type="checkbox" checked="checked" name="remember" /> Remember
					me
				</label> -->
			</div>

			<div class="container" style="background-color: #f1f1f1">
				<!-- Button trigger modal -->
				<button
					type="button"
					class="btn btn-primary"
					data-bs-toggle="modal"
					data-bs-target="#staticBackdrop"
				>
					Join us
				</button>
				<span class="psw">Forgot <a href="#" class="psw">password?</a></span>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { postLogin } from '@/api/login.js';
import { useAlertStore } from '@/stores/alert';
import { onClickJoin } from '@/api/join';

// login 관련 스크립트
const loginInfo = ref({
	email: '',
	password: '',
});

function emailCheck() {
	let email = new String(loginInfo.value.email);
	console.log('@@@@@', email.search('@'));
	if (email.search('@') > -1) {
		return true;
	}
	return false;
}

// input focus 확인할 것!!
// const focused = ref(false);
// const onFocus = () => {
// 	focused.value = true;
// };
function loginSubmit(login) {
	if (emailCheck()) {
		postLogin(login);
	} else {
		useAlertStore().vAlert('이메일 형식을 확인해주세요.');
		// onFocus();
	}
}

// 회원가입 정보
const joinFormData = ref({
	name: '',
	email: '',
	password: '',
	city: '',
	zipcode: '',
});
// password 중복체크 정보
const security = ref({
	passwordCheck: '',
	pwCheckAlert: '',
	pwSecurityStatus: false,
});
// pws 중복체크 기능 구현
function onPwSecurityCheck() {
	let pw_1 = joinFormData.value.password;
	let pw_2 = security.value.passwordCheck;
	if (pw_1.length < 8) {
		security.value.pwCheckAlert = '비밀번호는 8자리 이상으로 설정해주세요';
		security.value.pwSecurityStatus = false;
	}

	if (pw_1 == '' && pw_2 == '') {
		security.value.pwCheckAlert = '비밀번호를 입력하세요';
	} else {
		if (pw_1 == pw_2) {
			security.value.pwCheckAlert = '비밀번호가 일치합니다';
			security.value.pwSecurityStatus = true;
			console.log('일치:', security.value.pwSecurityStatus);
		} else {
			security.value.pwCheckAlert = '비밀번호가 일치하지 않습니다';
			security.value.pwSecurityStatus = false;
			console.log('불일치:', security.value.pwSecurityStatus);
		}
	}
}
</script>

<style scoped>
@import '@/assets/main.css';

/* Full-width inputs */
.login {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	box-sizing: border-box;
}

/* The "Forgot password" text */
span.psw {
	float: right;
	padding-top: 16px;
}
a.psw {
	text-decoration: none;
}

/* joinform */
ul {
	list-style-type: none;
	margin: auto;
	padding: 0;
	text-align: right;
}

li {
	display: block;
	margin: 10px 0;
	list-style: none;
}

.font-red {
	color: red;
}

.font-black {
	color: red;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
	span.psw {
		display: block;
		float: none;
	}
}
</style>
