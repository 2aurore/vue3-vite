<template>
	<div class="card-body">
		<div class="row">
			<p class="post-contents">내용</p>
			<p class="text-muted post-contents">작성자</p>
		</div>
	</div>
</template>

<script setup>
defineProps({
	content: {
		type: String,
		required: true,
	},
	member: {
		type: String,
		required: true,
	},
	createdate: {
		type: String,
		required: true,
	},
	deleted: {
		type: Boolean,
		required: true,
	},
});

console.log(this.repliy);
</script>

<style scoped>
@import '@/assets/main.css';
</style>
