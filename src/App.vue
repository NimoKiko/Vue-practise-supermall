<template>
  <nav>
    <main-tabbar></main-tabbar>
    <router-view />
  </nav>
</template>
<script>
import MainTabbar from "@/components/content/mainTabBar/MainTabBar.vue";
export default {
  components:{
    MainTabbar
  }
}
</script>
<style lang='less' scoped>
@import url("@/assets/css/base.css");
</style>
