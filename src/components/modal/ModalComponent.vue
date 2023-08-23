<script setup lang="ts">
import CloseIcon from '../icons/CloseIcon.vue';

defineProps({
  openModal: { type: Boolean, required: true },
  changeOpenModel: { type: Function, required: true },
});
</script>

<template>
  <div class="modal">
    <div class="modal__mask">
      <div class="modal__wrapper">
        <div class="model__header">
          <div class="modal__close" @click="changeOpenModel(false)">
            <CloseIcon />
          </div>
        </div>
        <div class="modal__content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--background-modal);
  height: 100dvh;
  width: 100dvw;
}

.modal__mask {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-300);
  padding: 1rem;
  border-radius: var(--border-radius);
}

.model__header {
  display: flex;
  justify-content: end;
}

.modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-200);
  border-radius: 50%;
  padding: 0.4rem;
  cursor: pointer;
}

.modal__wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
