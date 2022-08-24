<template>
	<div class="app-alret">
		<transition-group name="slide">
			<div
				v-for="({ message, type }, index) in alerts"
				:key="index"
				class="alert"
				:class="typeStyle(type)"
				role="alert"
			>
				{{ message }}
			</div>
		</transition-group>
	</div>
</template>

<script setup>
import { useAlert } from '@/compossable/alert';

const { alerts } = useAlert();
const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-primary');
</script>

<style scoped>
.app-alret {
	position: fixed;
	top: 10px;
	right: 10px;
	border-style: none;
}
/** effect alert animation */
.slide-enter-from,
.slide-leave-to {
	opacity: 0;
	transform: translateY(-30px);
}
.slide-enter-active,
.slide-leave-active {
	transition: opacity all 0.5s ease;
}
.slide-enter-to,
.slide-leave-from {
	opacity: 1;
	transform: translateY(0px);
}
</style>
