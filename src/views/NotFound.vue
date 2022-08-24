<template>
  <div class="text-center py-5">
    <h1>Ooops!</h1>
    <h2>404 Not found</h2>
    <div class="text-muted">요청한 페이지를 찾을 수 없습니다.</div>
    <div class="mt-4">
      <router-link to="/posts">
        <button class="btn btn-primary">게시판으로 돌아가기</button>
      </router-link>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
