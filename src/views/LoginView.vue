<template>
	<div>
		<form @submit.prevent="loginSubmit">
			<div class="container">
				<label for="userEmail"><b>E-mail</b></label>
				<input
					type="text"
					placeholder="Enter E-mail"
					name="userEmail"
					v-model="loginInfo.email"
					@focus="onFocus"
					required
				/>

				<label for="psw"><b>Password</b></label>
				<input
					type="password"
					placeholder="Enter Password"
					name="psw"
					v-model="loginInfo.password"
					required
				/>
				<div class="d-grid gap-2 mt-3">
					<button type="submit" class="btn btn-primary btn-lg">Login</button>
				</div>
				<!-- <label>
					<input type="checkbox" checked="checked" name="remember" /> Remember
					me
				</label> -->
			</div>

			<div class="container" style="background-color: #f1f1f1">
				<button
					type="button"
					class="btn btn-primary joinBtn"
					:click="showModal"
				>
					Join us
				</button>
				<span class="psw">Forgot <a href="#" class="psw">password?</a></span>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { postLogin } from '@/api/login.js';
import { useAlertStore } from '@/stores/alert';

const loginInfo = ref({
	email: '',
	password: '',
});

function emailCheck() {
	let email = new String(loginInfo.value.email);
	// console.log(email.search('@'));
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
const loginSubmit = () => {
	if (emailCheck()) {
		postLogin(loginInfo.value);
	} else {
		useAlertStore().vAlert('이메일 형식을 확인해주세요.');
		// onFocus();
	}
};
</script>

<style scoped>
@import '@/assets/main.css';

/* Full-width inputs */
input[type='text'],
input[type='password'] {
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

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
	span.psw {
		display: block;
		float: none;
	}
	.joinBtn {
		width: 100%;
	}
}
</style>
