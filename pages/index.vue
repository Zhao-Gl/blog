<template>
  <div class="container mx-auto bg-gray text-white">
    <nav class="h-40"></nav>
    <!-- Hero Section -->
    <section class="flex items-center justify-center">
      <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-start justify-between">
          <!--Hero Left-->
          <div class="w-full md:0">
            <img src="https://picsum.photos/400/600" alt="Carlos Mendoza" class="rounded-lg" />
          </div>
          <!--Hero Right-->
          <div class="w-full md:w-1/2 h-full">
            <ul class="flex space-x-6 text-2xl mt-5 mb-40">
              <li><NuxtLink to="/services" class="hover:text-yellow-400">Services</NuxtLink></li>
              <li><NuxtLink to="/works" class="hover:text-yellow-400">Works</NuxtLink></li>
              <li><NuxtLink to="/blog" class="hover:text-yellow-400">Blog</NuxtLink></li>
            </ul>
            <div>
              <h2 class="text-2xl font-bold mb-4">Introduction</h2>
              <p class="text-lg mb-6">
                Product Designer and Developer, based in California.
              </p>
              <p class="text-sm mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
              </p>
              <NuxtLink to="/about" class="text-yellow-400 hover:underline">My story →</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <footer class="bg-gray-dark py-12">
      <div class="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <!--text left-->
          <div class="mb-6 md:mb-0">
            <h3 class="text-xl font-bold mb-2">Contact</h3>
            <p class="text-lg">
              Any Type Of Query & Discussion.
            </p>
            <p class="text-sm mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
            </p>
          </div>
          <!--text right-->
          <div>
            <h3 class="text-xl font-bold mb-2">You can't use up creativity...</h3>
            <p class="text-lg">
              the more you use, the more you have in your significant mind.
            </p>
            <p class="text-sm mt-2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
/* Add any custom styles here */
</style>
