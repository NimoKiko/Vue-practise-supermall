<template>
  <div id="swiper">
    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <div class="indicator-box">
      <div v-for="item in slideCount" class="indicator"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideCount: 0,
    };
  },
  prop: {},
  methods: {
    touchStart() {},
    touchMove() {},
    touchEnd() {},
    // 获取滑块个数
    getItemCount() {
      let itemEls = document.querySelectorAll(
        "#swiper > .swiper > .swiper-item"
      );
      this.slideCount = itemEls.length;
      console.log(itemEls.length);
    },
  },
  mounted() {
    setTimeout(() => {
      this.getItemCount();
    }, 100);
  },
};
</script>

<style lang="less" scoped>
#swiper {
  overflow: hidden;
  position: relative;
  .swiper {
    display: flex;
  }
  .indicator-box {
    width: 25%;
    display: flex;
    justify-content: space-around;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;

    z-index: 10;
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(107, 107, 107, 0.523);
    }
  }
}
</style>