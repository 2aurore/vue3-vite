<template>
	<div class="container">
		<h2>게시판</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div class="col-4" v-for="(post, index) in posts" :key="index">
				<PostItem
					:title="post.title"
					:createDay="setDate(post.createDate)"
					@click="goDetail(post.seq)"
				></PostItem>
			</div>
		</div>
		<router-link to="/posts/create">
			<button class="btn btn-primary mt-3">새 글 쓰기</button>
		</router-link>
		<!-- pagination -->
		<nav class="mt-1" aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li class="page-item">
					<a class="page-link" href="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li class="page-item"><a class="page-link" href="#">1</a></li>
				<li class="page-item"><a class="page-link" href="#">2</a></li>
				<li class="page-item"><a class="page-link" href="#">3</a></li>
				<li class="page-item">
					<a class="page-link" href="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li>
			</ul>
		</nav>
		<hr style="visibility: hidden" />
	</div>
</template>

<script setup>
import { ref } from 'vue';
import router from '@/router/index.js';
import { getList, checkToken, setDate } from '@/api/posts.js';
import PostItem from '@/components/post/PostItem.vue';

checkToken();

// get all posting data
const posts = ref([]);
const fetchPosts = () => {
	getList().then(result => {
		posts.value = result.list;
		// console.log(typeof posts.value[0].createDate);
	});
};
fetchPosts();

const goDetail = postseq => {
	console.log('goDetail:::::::::::', postseq);
	router.push({
		name: 'postDetail',
		params: { seq: postseq },
	});
};

// appAlert option value
</script>

<style scoped>
@import '@/assets/main.css';
</style>
