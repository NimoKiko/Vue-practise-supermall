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
    <TabControl
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabChange="goodsListChange"
    ></TabControl>
    <GoodsList :goods="showGoods"></GoodsList>
  </div>
</template>

<script>
import HomeSwiper from "./childCpn/HomeSwiper.vue";
import HomeRecommend from "./childCpn/HomeRecommend.vue";
import FeatureView from "./childCpn/FeatureView.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/common/tabcontrol/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import BScroll from "better-scroll";
export default {
  data() {
    return {
      banner: [],
      recomment: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentTab: "pop",
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
  },
  computed: {
    showGoods() {
      return this.goods[this.currentTab].list;
    },
  },
  methods: {
    /**
     * 接收子组件发送数据
     */
    goodsListChange(index) {
      console.log(index);
      // 方法一：if语句
      // if (index == 0) {
      //   this.currentTab = 'pop';
      // } else if (index == 1) {
      //   this.currentTab = 'new';
      // } else if (index == 2) {
      //   this.currentTab = 'sell';
      // }
      // 方法二：switch语句
      switch (index) {
        case 0:
          this.currentTab = "pop";
          break;
        case 1:
          this.currentTab = "new";
          break;
        case 2:
          this.currentTab = "sell";
      }
    },
    /**
     * 网络请求相关方法
     */
    // 获取轮播图数据和首页推荐数据
    getData() {
      this.$store.dispatch("getMultidata").then((res) => {
        this.banner = res.data.banner.list;
        this.recomment = res.data.recommend.list;
      });
    },
    // 获取商品列表
    getGoodsList(type) {
      const page = this.goods[type].page + 1;
      let params = {
        type: type,
        page: page,
      };
      this.$store.dispatch("getGoodsList", params).then((res) => {
        /**
         * 扩展运算符
         *  ... - 可以解析数组
         */
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        console.log(this.goods);
      });
    },
  },
  mounted() {
    this.getData();
    this.getGoodsList("pop");
    this.getGoodsList("new");
    this.getGoodsList("sell");
    let wrapper = document.querySelector(".wrapper");
    let scroll = new BScroll(wrapper);
  },
};
</script>

<style lang="less" scoped>
#home {
  padding-top: 43px;
  .nav-bar {
    background: var(--color-tint);
    color: white;
    font-size: 22px;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
  }
  .tab-control {
    background: white;
    position: sticky;
    top: 44px;
    z-index: 999;
  }
}
</style>
