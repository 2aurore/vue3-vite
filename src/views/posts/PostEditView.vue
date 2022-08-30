<template>
	<div class="card">
		<div class="card-body mt-2 mb-2">
			<h2 class="mb-3">게시글 수정</h2>
			<div class="mb-3">
				<input type="text" class="form-control" v-model="form.title" />
			</div>
			<div class="mb-3">
				<textarea
					class="form-control"
					rows="10"
					v-model="form.content"
				></textarea>
			</div>
		</div>
		<div class="postseq invisible"></div>
		<div class="row">
			<div class="col mb-3 me-3" style="text-align: right">
				<button class="btn btn-outline-danger me-3" @click="historyBack">
					취소
				</button>
				<button class="btn btn-primary" @click="updatePost(form, props.seq)">
					저장
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import router from '@/router/index';
import { getPost, updatePost } from '@/api/posts';
import { ref, watch } from 'vue';

const props = defineProps({
	seq: {
		type: Number,
		required: true,
	},
});
// console.log('edit props.seq::::::::', props.seq);

const form = ref({
	title: null,
	content: null,
});

const fetchPost = () => {
	getPost(props.seq).then(result => {
		form.value.title = result.title;
		form.value.content = result.content;
	});
};
fetchPost();

const historyBack = () => {
	router.back();
};
</script>

<style scoped>
@import '@/assets/main.css';
</style>
