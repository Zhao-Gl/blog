<template>
  <a-layout>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </a-layout>
</template>

<script setup lang="ts">
import Header from "./layouts/header/header.vue";
import Main from "./layouts/main/main.vue";
import Footer from "./layouts/footer/footer.vue";
</script>

<style lang="scss">
#app {
  @include home();
}
.ant-layout {
  background: none;
}
</style>
