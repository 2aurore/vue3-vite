<template>
	<div class="card-body">
		<div class="row">
			<p class="post-contents col-6">{{ content }}<br /></p>
			<p class="text-muted post-contents col" style="text-align: right">
				{{ member }}<br />
				{{ setDate(createdate) }}
			</p>
		</div>
	</div>
</template>

<script setup>
import { setDate } from '@/api/posts';
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
		type: [String, Date, Number],
		required: true,
	},
	deleted: {
		type: Boolean,
		required: true,
	},
});
</script>

<style scoped>
@import '@/assets/main.css';
</style>
