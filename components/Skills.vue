<template>
  <section id="skills" class="container mx-auto py-24">
    <h2 class="text-3xl font-bold mb-8">Skills</h2>
    <div class="flex flex-wrap justify-center gap-4">
      <span v-for="skill in skills" :key="skill" class="bg-gray-200 px-3 py-1 rounded">
        {{ skill }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Nuxt', 'Tailwind CSS', 'Git']
</script>


