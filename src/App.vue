// src/components/TheNav.vue
<script setup>
import MainView from '@/layout/MainView.vue';
import TheHeader from '@/layout/MainHeader.vue';
import AppAlert from './components/AppAlert.vue';
// import LoadingModal from '@/components/LoadingModal.vue.vue';
</script>

<template>
  <TheHeader></TheHeader>
  <MainView></MainView>
  <AppAlert />
</template>

<style></style>
