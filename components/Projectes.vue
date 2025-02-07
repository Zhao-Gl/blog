<template>
  <section id="projects" class="container mx-auto py-24">
    <h2 class="text-3xl font-bold mb-8">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.title" class="border rounded-lg overflow-hidden shadow-lg">
        <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="font-bold text-xl mb-2">{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  { title: 'Project 1', description: 'Description of project 1', image: '/placeholder.svg' },
  { title: 'Project 2', description: 'Description of project 2', image: '/placeholder.svg' },
  { title: 'Project 3', description: 'Description of project 3', image: '/placeholder.svg' },
]
</script>

