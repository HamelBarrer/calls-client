<script setup lang="ts">
import ErrorAlert from '@/components/notifications/alerts/ErrorAlert.vue';
import { useAuthService } from '@/services/authService';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';

const authService = useAuthService();
const authStore = useAuthStore();

const username = ref('');
const password = ref('');

const isError = ref(false);
const messageError = ref('');

const handleSubmit = async () => {
  try {
    const data = await authService.login({
      username: username.value,
      password: password.value,
    });

    authStore.registerAuthUser(data);
  } catch (error: any) {
    isError.value = true;
    messageError.value = error.message;
    setTimeout(() => {
      isError.value = false;
      messageError.value = '';
    }, 3000);
  }
};
</script>

<template>
  <div class="center">
    <div class="card">
      <h2>Login</h2>
      <form class="form" @submit.prevent="handleSubmit">
        <div class="form__group">
          <input v-model="username" type="text" class="form__input" />
        </div>
        <div class="form__group">
          <input v-model="password" type="password" class="form__input" />
        </div>
        <div class="form__button">
          <button class="button button__purple">Login</button>
        </div>
      </form>
    </div>
  </div>
  <ErrorAlert v-if="isError" :message="messageError" />
</template>

<style scoped></style>
