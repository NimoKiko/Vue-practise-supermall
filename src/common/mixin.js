/**
 * 混入(mixin)
 */
import BackToTop from "@/components/content/backtotop/BackToTop.vue"

export const backToTopMixin = {
  components: {
    BackToTop,
  },
  data() {
    return {
      backTopShow: false,
    };
  },
  methods: {
    // 监听回到顶部
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    // 监听是否显示返回顶部按钮
    backToTopListener(pos){
      this.backTopShow = -pos.y > 1000 ? true : false;
    }
  },
};
