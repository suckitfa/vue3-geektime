
<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/about">about</router-link>
    <p><button @click="updateIcon">change Icon</button></p>
    <p><button @click="toggle">toggle full screen</button></p>
    <p><button>toggleDark</button></p>
    <router-view></router-view>
  </div>
</template>

<script setup>
import useFavicon from './hooks/useFaviconHooks';
import {useFullscreen} from '@vueuse/core'

let {favicon}  = useFavicon()
// 修改数据即可
function updateIcon() {
  const LOADINGICON= '/loading.png'
  favicon.value = LOADINGICON
}
const {toggle} = useFullscreen()

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
