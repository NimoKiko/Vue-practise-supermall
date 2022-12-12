<template>
  <div id="home">
    <!-- 导航栏 -->
    <NavBar class="nav-bar">
      <template #nav-center>
        <div>购物街</div>
      </template>
    </NavBar>
    <HomeSwiper :banners="banner"></HomeSwiper>
    <HomeRecommend :recommends="recomment"></HomeRecommend>
    <FeatureView></FeatureView>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import HomeSwiper from "./childCpn/HomeSwiper.vue"
import HomeRecommend from "./childCpn/HomeRecommend.vue"
import FeatureView from "./childCpn/FeatureView.vue"
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
    HomeRecommend,
    FeatureView
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
#home{
  padding-top: 43px;
}
.nav-bar{
  background: var(--color-tint);
  color: white;
  font-size: 22px;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
