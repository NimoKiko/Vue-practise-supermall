<template>
  <nav>
    <router-view v-slot="{ Component }">
      <keep-alive >
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- <router-view /> -->
    <main-tabbar></main-tabbar>
  </nav>
</template>
<script>
import MainTabbar from "@/components/content/mainTabBar/MainTabBar.vue";
export default {
  components: {
    MainTabbar,
  },
};
</script>
<style lang="less" scoped>
@import url("@/assets/css/base.css");
</style>
