<script setup lang="ts">
import HeaderComponent from '@/components/layout/HeaderComponent.vue';
import SidebarComponent from '@/components/layout/SidebarComponent.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <SidebarComponent />
    <main class="main container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
