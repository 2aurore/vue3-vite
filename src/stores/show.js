import router from '@/router/index';
import { defineStore } from 'pinia';

export const useShowStore = defineStore('show', {
	state: () => ({
		show: [],
	}),
	actions: {
		vLogin() {
			this.show.push({ loginFlag: false, logoutFlag: true });
		},
		vLogout() {
			this.show.loginFlag = false;
			this.show.logoutFlag = true;
			router.go();
		},
	},
});
