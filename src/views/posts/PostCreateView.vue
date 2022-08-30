<template>
	<div class="card">
		<div class="card-body">
			<h2 class="mb-3">게시글 작성</h2>
			<div class="mb-3">
				<input
					type="text"
					class="form-control"
					v-model="newPost.title"
					placeholder="제목"
					required
				/>
			</div>
			<div class="mb-3">
				<textarea
					class="form-control"
					v-model="newPost.content"
					rows="10"
					required
				></textarea>
			</div>
		</div>
		<div class="postseq invisible"></div>
		<div class="row">
			<div class="col mb-3 me-3" style="text-align: right">
				<router-link to="/posts">
					<button class="btn btn-outline-danger me-3">취소</button>
				</router-link>
				<button class="btn btn-primary" @click="onSave(newPost)">저장</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { createPost } from '@/api/posts';
import { ref } from 'vue';

const newPost = ref({
	title: null,
	content: null,
});

const onSave = newPost => {
	// console.log('create!!!!!', newPost);
	createPost(newPost).then();
};
</script>

<style scoped>
@import '@/assets/main.css';

/* Chrome, Firefox, Opera, Safari 10.1+ */
input:focus::placeholder {
	color: transparent;
}
</style>
