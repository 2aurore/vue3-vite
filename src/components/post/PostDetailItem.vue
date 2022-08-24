<template>
	<div class="card">
		<div class="card-body">
			<div v-if="show" class="mb-3 row">
				<h2>{{ postObject.title }}</h2>
				<div class="col">
					<p class="post-contents">작성자&nbsp;{{ postObject.memberEmail }}</p>
					<p class="post-contents">작성일&nbsp;{{ postObject.createDate }}</p>
				</div>
				<div class="col">
					<p class="post-contents">조회수&nbsp;{{ postObject.viewCount }}</p>
				</div>
			</div>

			<div v-if="show" class="mb-3">
				<textarea
					class="form-control"
					id=""
					rows="10"
					v-model="postObject.content"
					readonly
				></textarea>
			</div>
			<div class="postseq invisible">{{ seq }}</div>
			<div class="row">
				<div class="col"></div>
				<div class="col-5"></div>
				<div class="col" style="text-align: right">
					<router-link to="/posts">
						<button class="btn btn-primary">목록</button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import { getPost } from '@/api/posts.js';
import cookies from '@/cookies/cookies.js';
defineProps({
	seq: {
		type: String,
		required: true,
	},
});

console.log(!cookies.isKey('accesstoken'));
const postseq = ref();
const postObject = ref();
onMounted(() => {
	postseq.value = document.getElementsByClassName('postseq')[0].innerHTML;

	const fetchPost = () => {
		// console.log('!!!!!! post seq : ', postseq.value);
		getPost(postseq.value).then(result => {
			postObject.value = reactive(result);
			console.log('getPost::::::::::::', postObject);
		});
	};
	fetchPost();
	// console.log(postObject);
});

const show = ref(false);
setTimeout(() => {
	console.log('show::::', show.value);
	show.value = true;
}, 3500);
</script>

<style lang="scss" scoped></style>
