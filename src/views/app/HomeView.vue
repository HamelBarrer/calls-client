<script setup lang="ts">
import MessageView from '@/components/icons/MessageView.vue';
import ModalComponent from '@/components/modal/ModalComponent.vue';
import { ref } from 'vue';

const openModal = ref(false);
const changeOpenModel = (value: boolean) => {
  openModal.value = value;
};
</script>

<template>
  <h2>Home</h2>
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

<style scoped></style>
