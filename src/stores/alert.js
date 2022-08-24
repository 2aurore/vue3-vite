import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alerts', {
	state: () => ({
		alerts: [],
	}),
	actions: {
		vAlert(message, type = 'error') {
			console.log(typeof message);
			console.log(message);
			this.alerts.push({ message, type });
			setTimeout(() => {
				this.alerts.shift();
			}, 2000);
		},
		vSuccess(message) {
			this.vAlert(message, 'success');
		},
	},
});
