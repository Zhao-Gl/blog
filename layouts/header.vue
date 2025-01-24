<template>
  <div class="header">
    <div class="h-container">
      <div class="h-left">
        h-left
      </div>
      <div class="h-right">
        <ul class="h-r-nav">
          <li v-for="(item, index) in rightTitles" :key="item.id">
            <div :class="item.active? 'h-r-li-active' : ''">
              <span class="h-r-li-text" @click="()=>{chooseNavTitle(item.id)}">
                {{ item.text }}
                <span class="h-r-li-sign" :class="item.active? 'h-r-li-sign-show' : ''">·</span>
              </span>
            </div>
          </li>
        </ul>
        <div class="h-r-content">
          <div class="h-r-content-title">
            - Hello, I'm Zhao Gl
          </div>
          <div class="h-r-content-text">
            <span>I am a web developer and developer based in China Xi'An.</span>
          </div>
          <div class="h-r-content-descriptions">
            <span>descriptions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rightTitles = reactive([
  {
    id: 1,
    text: 'Services',
    active: true,
  },
  {
    id: 2,
    text: 'Works',
    active: false,
  },
  {
    id: 3,
    text: 'Blog',
    active: false,
  }
])

/**
 * 切换导航栏
 * @param id
 */
const chooseNavTitle = (id:number) => {
  rightTitles.forEach(item => {
    item.active = item.id === id;
  })
}
</script>

<style scoped>
.header{
  background-color: #323647;
  padding-top: 80px;
  padding-bottom: 40px;
}
.h-container{
  width: 80%;
  margin: 0 auto;
  display: flex;
}
.h-left{
  width: 60%;
  height: 600px;
  background-image: url("https://picsum.photos/1000/600");
}
.h-right{
  width: 40%;
  height: 600px;
  padding: 20px 0 0 40px;
}
.h-r-nav{
  display: flex;
  list-style: none;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5;
  transition: all 0.5s ease-in-out;
  margin-bottom: 80px;
  & li{
    color: gray;
    width: 40%;
    cursor: pointer;
    & .h-r-li-text{
      display: inline-block;
      position: relative;
      & .h-r-li-sign{
        display: none;
        color: #efa649;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -50%;
      }
    }
  }
  & li:hover{
    color: #f1f0e1;
  }
}
/*激活的li*/
.h-r-li-active{
  color: #f1f0e1;
}
/*显示的下标*/
.h-r-li-sign-show{
  display: inline-block !important;
}
.h-r-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.h-r-content-title{
  font-size: 0.8rem;
  color: gray;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 1.5;
  margin-bottom: 20px;
}
.h-r-content-text{
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.h-r-content-descriptions{
  font-size: 1.2rem;
  color: gray;
  line-height: 1.5;
}
</style>
