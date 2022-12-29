<!--
  功能：商品详情页
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2022年12月19日 16:29:09
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="detail">
    <DetailNavBar
      ref="navBar"
      @navClick="navClick"
      class="detail-nav"
    ></DetailNavBar>
    <BScroll
      ref="scroll"
      :listenerFlag="true"
      class="content"
      @scrollPos="scrollPos"
    >
      <DetailSwipper :topImages="topImages"></DetailSwipper>
      <DetailBaseInfo :goods="goodsInfo"></DetailBaseInfo>
      <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
      <DetailGoodsInfo
        :detailInfo="goodsDetail"
        @imageLoad="imageLoad"
      ></DetailGoodsInfo>
      <DetailParamsInfo ref="params" :params="goodsParams"></DetailParamsInfo>
      <DetailComment ref="comment" :comment="goodsComment"></DetailComment>
    </BScroll>
    <DetailBotBar @addCart="addCart"></DetailBotBar>
    <BackToTop v-show="backTopShow" @click="backToTop"></BackToTop>
  </div>
</template>

<script>
import DetailNavBar from "./childCpn/DetailNavBar.vue";
import DetailSwipper from "./childCpn/DetailSwipper.vue";
import DetailBaseInfo from "./childCpn/DetailBaseInfo.vue";
import DetailShopInfo from "./childCpn/DetailShopInfo.vue";
import DetailGoodsInfo from "./childCpn/DetailGoodsInfo.vue";
import DetailParamsInfo from "./childCpn/DetailParamsInfo.vue";
import DetailComment from "./childCpn/DetailComment.vue";
import DetailBotBar from "./childCpn/DetailBotBar.vue";

import BScroll from "@/components/common/scroll/BScroll.vue";

import { Goods, Shop, Params } from "@/request/home/homeRequest";
import { backToTopMixin } from "@/common/mixin";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 混入
  mixins: [backToTopMixin],
  // 局部注册的组件
  components: {
    DetailNavBar,
    DetailSwipper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailComment,
    DetailBotBar,
    BScroll,
  },
  // 组件状态值
  data() {
    return {
      iid: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      goodsDetail: {},
      goodsParams: {},
      goodsComment: [],
      navPos: [0, 0, 0],
      currentIndex: 0,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      console.log(111);
      this.getNavPos();
      console.log(this.navPos);
    },
    // 监听navbar点击事件
    navClick(index) {
      console.log(index);
      let paramsNode = this.$refs.params.$el;
      let commentNode = this.$refs.comment.$el;
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0, 1000);
          break;
        case 1:
          this.$refs.scroll.scrollTo(0, -paramsNode.offsetTop, 1000);
          break;
        case 2:
          this.$refs.scroll.scrollTo(0, -commentNode.offsetTop, 1000);
          break;
      }
      // console.log(paramsNode.offsetTop);
    },
    // 监听滚动
    scrollPos(pos) {
      let position = (-pos.y + 44).toFixed(0);
      if (position >= this.navPos[0] && position < this.navPos[1]) {
        this.$refs.navBar.currentIndex = 0;
      } else if (position >= this.navPos[1] && position < this.navPos[2]) {
        this.$refs.navBar.currentIndex = 1;
      } else if (position >= this.navPos[2]) {
        this.$refs.navBar.currentIndex = 2;
      }

      // 监听是否显示回到顶部按钮
      this.backToTopListener(pos);
    },
    // 获取顶部导航栏对应组件的offsetTop
    getNavPos() {
      this.navPos = [];
      let paramsNode = this.$refs.params.$el;
      let commentNode = this.$refs.comment.$el;

      this.navPos.push(0);
      this.navPos.push(paramsNode.offsetTop);
      this.navPos.push(commentNode.offsetTop);
    },
    // 监听回到顶部
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    // 添加到购物车
    addCart(){
      // 获取商品信息
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.iid = this.iid;

      // 将商品添加到购物车
      console.log(product);
      this.$store.commit("SAVE_PRODUCT",product);
    },
  },
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {
    // let scroll = this.$refs.scroll;
    // scroll.scrollListener();
    // console.log(this.$route.params);
  },
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    let params = {
      iid: this.iid,
    };
    this.$store.dispatch("getGoodsDetailById", params).then((res) => {
      console.log(res);
      let data = res.result;
      // 获取顶部轮播数据
      this.topImages = data.itemInfo.topImages;
      // 获取商品介绍
      this.goodsInfo = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取商家信息
      this.shopInfo = new Shop(data.shopInfo);
      // 保存商品详情数据
      this.goodsDetail = data.detailInfo;
      // 保存商品参数信息
      this.goodsParams = new Params(data.itemParams.info, data.itemParams.rule);
      // 保存商品评论信息
      this.goodsComment = data.rate.cRate !== 0 ? data.rate.list : "";
    });
  },
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeUnmount() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  unmounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style lang="less" scoped>
#detail {
  position: relative;
  z-index: 99;
  background: #fff;
  height: 100vh;
  .detail-nav {
    position: relative;
    top: 0;
    z-index: 9;
  }
  .content {
    height: calc(100% - 44px - 43px);
  }
}
</style>
