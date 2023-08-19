<script setup lang="ts">
defineProps({
  message: { type: String, required: true },
});
</script>

<template>
  <div class="alert alert__error">
    <span>{{ message }}</span>
  </div>
</template>
