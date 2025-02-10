<template>
  <section>
    Contact
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

