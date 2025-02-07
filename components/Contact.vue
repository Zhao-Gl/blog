<template>
  <section id="contact" class="container mx-auto py-24">
    <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto">
      <div class="mb-4">
        <label for="name" class="block mb-2">Name</label>
        <input id="name" v-model="name" type="text" class="w-full p-2 border rounded" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2">Email</label>
        <input id="email" v-model="email" type="email" class="w-full p-2 border rounded" required>
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-2">Message</label>
        <textarea id="message" v-model="message" class="w-full p-2 border rounded" rows="4" required></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Send Message
      </button>
    </form>
  </section>
</template>

<script setup lang="ts">
const name = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted', { name: name.value, email: email.value, message: message.value })
  // Reset form fields
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

