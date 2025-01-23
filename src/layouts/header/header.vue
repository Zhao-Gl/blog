<template>
  <a-layout-header class="header">
    <div class="header-top">
      <h2 class="tracking-in-contract">Header</h2>
    </div>
    <div class="header-options">
      <a-space>
        <div class="header-option">
          <a-button type="link">Log in</a-button>
        </div>
        <div class="header-option">
          <a-select defaultValue="dark" @change="changeTheme" style="width: 5rem">
            <a-select-option value="day">day</a-select-option>
            <a-select-option value="dark">dark</a-select-option>
          </a-select>
        </div>
      </a-space>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import {} from "vue";

const changeTheme = (value: string): void => {
  document.getElementsByTagName("body")[0].setAttribute("data-theme", value);
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  display: flex;
  //   justify-content: space-between;
  position: fixed;
  z-index: 999;
  .header-top {
    width: 80%;
    text-align: start;
    justify-content: start;
  }
  .tracking-in-contract {
    color: #fff;
    -webkit-animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }
  @-webkit-keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
  .header-options {
    width: 20%;
    display: flex;
    justify-content: end;
  }
}
@media screen and (max-width: 576px) {
  .header-top h2 {
    display: none;
  }
}
</style>
