<template>
	<post-detail-item :seq="$route.params" />
	<router-view></router-view>
</template>

<script setup>
import PostDetailItem from '@/components/post/PostDetailItem.vue';
</script>

<style scoped>
@import '@/assets/main.css';
</style>
