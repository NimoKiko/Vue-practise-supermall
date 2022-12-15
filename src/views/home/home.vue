<template>
  <div id="home">
    <!-- 导航栏 -->
    <NavBar class="nav-bar">
      <template #nav-center>
        <div>购物街</div>
      </template>
    </NavBar>
    <TabControl
      class="tab-control-top"
      :titles="['流行', '新款', '精选']"
      @tabChange="goodsListChange"
      ref="tabControl1"
      v-show="isTabFixed"
    ></TabControl>
    <Scroll
      :listenerFlag="true"
      :pullUpLoad="true"
      class="scroll-wrapper"
      ref="homeScroll"
      @scrollPos="scrollPos"
      @loadMore="loadMore"
    >
      <!-- 轮播图组件 -->
      <HomeSwiper @swiperImgLoad="swiperImgLoad" :banners="banner"></HomeSwiper>
      <!-- 推荐组件 -->
      <HomeRecommend :recommends="recomment"></HomeRecommend>
      <!-- 本周流行组件 -->
      <FeatureView></FeatureView>
      <!-- tab组件 -->
      <TabControl
        :titles="['流行', '新款', '精选']"
        @tabChange="goodsListChange"
        ref="tabControl2"
      ></TabControl>
      <!-- 商品列表组件 -->
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
    <BackToTop
      v-show="backTopShow"
      @click="backToTop"
      class="back-to-top"
    ></BackToTop>
  </div>
</template>

<script>
import HomeSwiper from "./childCpn/HomeSwiper.vue";
import HomeRecommend from "./childCpn/HomeRecommend.vue";
import FeatureView from "./childCpn/FeatureView.vue";
import Scroll from "@/components/common/scroll/BScroll.vue";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/common/tabcontrol/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackToTop from "@/components/content/backtotop/BackToTop.vue";

// 工具类
import utils from "@/common/utils/utils";

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
      BScroll: null,
      backTopShow: false,
      tabOffsetTop: 684,
      isTabFixed: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackToTop,
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
      // console.log(index);
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 监听轮播图是否加载完毕
    swiperImgLoad() {
      // 获取tab-control的offsetTop
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      console.log(this.tabOffsetTop);
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
        this.$refs.homeScroll.finishPullUp();
      });
    },
    /**
     * BScroll相关事件
     */
    // 返回顶部
    backToTop() {
      this.$refs.homeScroll.scrollTo(0, 0, 1000);
    },
    // 是否显示返回顶部按钮
    scrollPos(pos) {
      // console.log(pos);
      // 判断回到顶部按钮是否显示
      this.backTopShow = -pos.y > 1000 ? true : false;

      // 决定tabControl是否吸顶（是否给它position:fixed属性）
      this.isTabFixed = -pos.y > this.tabOffsetTop ? true : false;
    },
    // 上拉加载更多
    loadMore() {
      // console.log("上拉加载更多");
      this.getGoodsList(this.currentTab);
    },
  },
  mounted() {
    this.getData();
    this.getGoodsList("pop");
    this.getGoodsList("new");
    this.getGoodsList("sell");

    // 防抖函数的使用
    const refresh = utils.debounce(this.$refs.homeScroll.refresh, 100);
    refresh();
  },
};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  // padding-top: 43px;
  .nav-bar {
    background: var(--color-tint);
    color: white;
    font-size: 22px;
    font-weight: bold;
  }
  .tab-control-top{
    // border: 1px solid red;
    position: fixed;
    top: 42px;
    z-index: 999;
    background: white;
  }
  .scroll-wrapper {
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;
    bottom: 0;
    height: calc(100vh - 92px);
    overflow: hidden;
  }
}
</style>
