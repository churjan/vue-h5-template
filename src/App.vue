<template>
  <div id="app" v-cloak>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'App',
  mounted() {
  },
}
</script>
<style lang="scss">
@import './scss/main.scss';
[v-cloak] {display: none;}
</style>
