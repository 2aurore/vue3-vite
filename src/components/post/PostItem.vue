<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title post-contents">{{ title }}</h5>
			<p class="text-muted post-contents">{{ createDay }}</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	title: {
		type: String,
		required: true,
	},
	createDay: {
		type: [String, Date, Number],
	},
});
</script>

<style scoped>
@import '@/assets/main.css';
</style>
