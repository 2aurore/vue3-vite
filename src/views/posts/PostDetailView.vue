<template>
	<div class="card">
		<!-- 게시글 상세 내용 -->
		<div v-if="show" class="card-body mt-2 mb-2">
			<div class="mb-3 row">
				<h2>{{ postObject.title }}</h2>
				<div class="col">
					<p class="post-contents">작성자&nbsp;{{ postObject.memberEmail }}</p>
					<p class="post-contents">작성일&nbsp;{{ postObject.createDate }}</p>
				</div>
				<div class="col">
					<p class="post-contents">조회수&nbsp;{{ postObject.viewCount }}</p>
				</div>
			</div>
			<!-- 추후 상하 슬라이드 바 추가 -->
			<div class="mb-3">
				<textarea
					class="form-control"
					id=""
					rows="10"
					v-model="postObject.content"
					readonly
				></textarea>
			</div>

			<div class="row">
				<div class="col" style="text-align: left">
					<router-link :to="`/posts/${seq}/edit`">
						<button class="btn btn-outline-primary me-2">수정</button>
					</router-link>
					<button class="btn btn-outline-warning" @click="deletePost(seq)">
						삭제
					</button>
				</div>
				<div class="col" style="text-align: right">
					<router-link to="/posts">
						<button class="btn btn-primary">목록</button>
					</router-link>
				</div>
				<!-- repliy area -->
				<div class="mt-3 row">
					<div class="col-10">
						<input
							type="text"
							class="form-control"
							style="font-size: small"
							placeholder="댓글을 입력해주세요"
							v-model="newRepliy.content"
						/>
					</div>
					<div class="col" style="text-align: right">
						<button
							class="btn btn-outline-primary btn-sm"
							name="repliyBtn"
							style="display: inline-block"
							@click="createRepliy(newRepliy)"
						>
							등록
						</button>
					</div>
				</div>
				<div v-for="(repl, index) in postObject.replies" :key="index">
					<RepliyItem
						:content="repl.content"
						:member="repl.memberEmail"
						:createdate="repl.createDate"
						:deleted="repl.deleted"
					></RepliyItem>
				</div>
			</div>
		</div>
		<div class="postseq invisible">{{ seq }}</div>
		<div class="card-body"></div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { getPost, deletePost } from '@/api/posts.js';
import { callPostRepliy } from '@/api/reply';
import { useAlertStore } from '@/stores/alert';
import RepliyItem from '@/components/repliy/RepliyItem.vue';
import router from '@/router';

const props = defineProps({
	seq: {
		type: Number,
		required: true,
	},
});

console.log('props.seq::::::::', props.seq);

const postObject = ref();
const replies = ref([]);
const fetchPost = () => {
	// console.log('!!!!!! post seq : ', postseq.value);
	getPost(props.seq).then(result => {
		postObject.value = result;
		console.log('getPost::::::::::::', postObject.value);
		if (postObject.value['replies']) {
			replies.value = postObject.value['replies'].reverse();
		}
	});
};
fetchPost();
// wait for get board Detail API
const show = ref(false);
setTimeout(() => {
	show.value = true;
}, 1000);

const newRepliy = ref({
	content: '',
	boardSeq: props.seq,
});

const createRepliy = newreplydata => {
	const alert = useAlertStore();
	// console.log('postData:::::', newreplydata);
	callPostRepliy(newreplydata).then(result => {
		console.log('result', result);

		if (result) {
			alert.vSuccess('댓글이 등록되었습니다.');
			router.go();
		} else {
			alert.vAlert('잠시 후 다시 시도해주세요.');
		}
	});
};
</script>

<style scoped>
@import '@/assets/main.css';

/* Chrome, Firefox, Opera, Safari 10.1+ */
input:focus::placeholder {
	color: transparent;
}
</style>
