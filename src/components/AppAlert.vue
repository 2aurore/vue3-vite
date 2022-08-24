<template>
	<div class="app-alret">
		<div
			v-for="({ message, type }, index) in alerts"
			:key="index"
			class="alert"
			:class="typeStyle(type)"
			role="alert"
		>
			{{ message }}
		</div>
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
</style>
