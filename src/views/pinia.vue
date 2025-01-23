<template>
  <div>
    <div id="msg">{{ msg }}</div>
    <button @click="changePinia">changePinia</button>
    <div>count:{{ count }}</div>
    <button @click="pinAddCount">pinAddCount</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, getCurrentInstance } from "vue";
import { mainStore } from "../store/index";
import { mapStores, storeToRefs } from "pinia";
import { get } from "../api/api";

const store = mainStore();
const { msg, count } = storeToRefs(store);

const changePinia = () => {
  // 函数方式修改state
  store.$patch((state) => {
    state.msg = "changePinia";
  });
  // 对象方式修改state
  // store.$patch({
  //   msg:'changePinia',
  // })
  get("/api/name").then((res) => {
    console.log(res);
  });
};
const pinAddCount = () => {
  store.addCount();
};
</script>
<style scoped lang="scss"></style>
