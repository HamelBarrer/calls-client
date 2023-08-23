<script setup lang="ts">
import MessageView from '@/components/icons/MessageView.vue';
import ModalComponent from '@/components/modal/ModalComponent.vue';
import { useUserService } from '@/services/userService';
import type { User } from '@/types/userType';
import { onMounted, ref } from 'vue';

const userService = useUserService();

const openModal = ref(false);
const changeOpenModel = (value: boolean) => {
  openModal.value = value;
};

const users = ref<User[]>([]);

onMounted(async () => {
  try {
    const data = await userService.listUsers();
    users.value = data!;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <h2>Home</h2>
  <div class="grid">
    <div v-for="user in users" :key="user.userId" class="card__img">
      <div class="card__image">
        <img :src="user.avatar" alt="Image user" class="img__list" />
      </div>
      <div class="card__content">
        <span>{{ user.username }}</span>
        <button class="button button__purple">Follow</button>
      </div>
    </div>
  </div>
  <button
    class="button button__purple position__button"
    @click="changeOpenModel(true)"
  >
    <MessageView />
  </button>
  <Teleport to="#modal" v-if="openModal">
    <ModalComponent
      :open-modal="openModal"
      :change-open-model="changeOpenModel"
    >
      <template #content>
        <form class="form">
          <div class="form__group">
            <textarea
              class="form__input"
              cols="30"
              rows="5"
              placeholder="Commentary"
            ></textarea>
          </div>
          <div class="form__button">
            <button class="button button__purple">Publish</button>
          </div>
        </form>
      </template>
    </ModalComponent>
  </Teleport>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
}
</style>
