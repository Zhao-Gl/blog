<template>
  <div class="app">
    <NuxtLayout name="header"></NuxtLayout>
    <NuxtLayout name="main">
      <template #main>
        <NuxtPage />
      </template>
    </NuxtLayout>
    <NuxtLayout name="footer"></NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
</style>
