<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <template #nav-center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend :recommends="recomment"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import HomeSwiper from "./childCpn/HomeSwiper.vue"
import HomeRecommend from "./childCpn/HomeRecommend.vue"
export default {
  data() {
    return {
      banner:[],
      recomment:[],
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  methods:{
    getData(){
      this.$store.dispatch("getMultidata").then(res => {
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recomment = res.data.recommend.list;

        // console.log(this.banner);
      })
    }
  },
  mounted(){
    this.getData();
  }
}
</script>

<style lang="less" scoped>
.nav-bar{
  background: var(--color-tint);
  color: white;
  font-size: 22px;
  font-weight: bold;
}
</style>
