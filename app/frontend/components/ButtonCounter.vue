<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const count = ref(0)

  onMounted(() => {})
</script>

<template>
  <button @click="count++" v-html="count"></button>
</template>

<style scoped>
  button {
    width: 500px;
  }
</style>
