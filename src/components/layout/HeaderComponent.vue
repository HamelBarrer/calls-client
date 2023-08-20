<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();
</script>

<template>
  <header class="header">
    <div class="header__content">
      <div class="header__opt">
        <img
          :src="authStore.authenticatedUser.avatar"
          class="img__user"
          alt="Imagen de usuario"
        />
        <span>{{ authStore.authenticatedUser.username }}</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 0 1rem;
  border-bottom: 1px solid var(--border);
}

.header__content {
  display: flex;
  justify-content: end;
}

.header__opt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
