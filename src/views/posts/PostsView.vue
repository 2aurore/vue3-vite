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
    <hr style="visibility: hidden" />
    <button class="btn btn-outline-primary logout" @click="actLogout">
      logout
    </button>
    <!-- <AppAlert :show="showFlag" :message="alertMsg" :type="alertType"></AppAlert> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import cookies from '@/cookies/cookies';
import router from '@/router/index.js';
import { getList, checkToken } from '@/api/posts.js';
// import AppAlert from '@/components/AppAlert.vue';
import PostItem from '@/components/PostItem.vue';

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

// reformat date
const setDate = str => {
  const date = new Date(str);
  // Date 객체를 한국 표준 날짜로 format
  return date.toLocaleDateString('ko-Kore-KR');
};

const goDetail = postseq => {
  console.log('goDetail:::::::::::', postseq);
  router.push({
    name: 'postDetail',
    params: { seq: postseq },
  });
};

// appAlert option value

// logout 시 accesstoken 삭제
const actLogout = () => {
  console.log(cookies.remove('accesstoken'));
  console.log(cookies.get('accesstoken'));

  console.log('로그아웃 되었습니다.');
  checkToken();
};
</script>

<style scoped>
@import '@/assets/main.css';
</style>
