<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore();
authStore.getAuthUser();
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
