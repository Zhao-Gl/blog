<template>
  <div class="home">
    <div class="banner">
      <div class="banner-left"></div>
      <div class="banner-right">
        <div class="text-focus-in">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur beatae possimus quidem sed quia unde distinctio in, magni modi inventore asperiores porro explicabo fugiat, voluptatem error incidunt eaque voluptatibus dicta.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur beatae possimus quidem sed quia unde distinctio in, magni modi inventore asperiores porro explicabo fugiat, voluptatem error incidunt eaque voluptatibus dicta.</p>
        </div>
      </div>
    </div>
    <!-- skills -->
    <div :class="{ skills: true, 'skills-animation': classSkillsIsActive }">
      <a-row class="row" :gutter="{ xs: 8, sm: 16, md: 24 }" justify="center">
        <a-col class="col" :xs="20" :sm="10" :md="10" :xl="4">col-12</a-col>
        <a-col class="col" :xs="20" :sm="10" :md="10" :xl="4">col-12</a-col>
        <a-col class="col" :xs="20" :sm="10" :md="10" :xl="4">col-12</a-col>
        <a-col class="col" :xs="20" :sm="10" :md="10" :xl="4">col-12</a-col>
      </a-row>
    </div>
    <!-- project collection-->
    <div class="project-collection"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onMounted } from "vue";
onMounted(() => {
  window.addEventListener("scroll", scrollTop, true);
});

// 默认侧边栏高度
let topHeight = ref(0); //侧边栏初始高度
let classSkillsIsActive = ref(false);
watch(topHeight, (newTopHeight, oldTopHeight) => {
  if (newTopHeight > 100 && newTopHeight < 150) {
    classSkillsIsActive.value = true;
  }
});

function scrollTop() {
  topHeight.value = document.documentElement.scrollTop || document.body.scrollTop;
}
function addClass() {}
</script>

<style scoped lang="scss">
.home {
  margin: 0 auto;
  max-width: 2000px;
}
.banner {
  min-height: 800px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-color: #001529;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 60px;

  .banner-left {
    width: 40%;
    background: url("https://images.pexels.com/photos/14930339/pexels-photo-14930339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") no-repeat;
    background-size: cover;
    overflow: hidden;
    box-shadow: 1.25rem 1.25rem 0.125rem -0.125rem #dfceb4;
    -webkit-animation: banner-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: banner-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @-webkit-keyframes banner-left {
      0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes banner-left {
      0% {
        -webkit-transform: translateX(-1000px);
        transform: translateX(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
  .banner-right {
    width: 55%;
    padding: 1rem;
    font-size: 1.5rem;
    color: #fff;
    p {
      text-indent: 2rem;
    }
    .text-focus-in {
      -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
      animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
    }
    @-webkit-keyframes text-focus-in {
      0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }
    @keyframes text-focus-in {
      0% {
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
      }
      100% {
        -webkit-filter: blur(0px);
        filter: blur(0px);
        opacity: 1;
      }
    }
  }
}
.skills {
  width: 100%;
  padding: 10px 0;
  .row {
    width: 100%;
    display: none;
    .col {
      border-radius: 5%;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      box-shadow: 10px 10px 3px -5px #9fb1c5;
      margin: 10px;
      height: 25rem;
      &:hover {
        box-shadow: 10px 10px 3px 5px #9fb1c5;
        top: -4px;
      }
      &:nth-child(1) {
        background: linear-gradient(135deg, #fce38a, #f38181) !important;
      }
      &:nth-child(2) {
        background: linear-gradient(135deg, #f54ea2, #ff7676) !important;
      }
      &:nth-child(3) {
        background: linear-gradient(135deg, #17ead9, #6078ea) !important;
      }
      &:nth-child(4) {
        background: linear-gradient(135deg, #622774, #c53364) !important;
      }
    }
  }
}
.skills-animation {
  .row {
    display: flex;
  }
  -webkit-animation: skills-animation 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  animation: skills-animation 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
  @-webkit-keyframes skills-animation {
    0% {
      -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes skills-animation {
    0% {
      -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0) scaleY(1) scaleX(1);
      transform: translateY(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
}
.project-collection {
  height: 30rem;
}

@media screen and (max-width: 992px) {
  body {
    font-size: 12px;
  }
  .banner-left {
    display: none;
  }
  .banner-right {
    width: 100% !important;
  }
}
@media screen and (max-width: 425px) {
  body {
    font-size: 12px;
  }
  .banner-left {
    display: none;
  }
  .banner-right {
    width: 100% !important;
  }
}
</style>
