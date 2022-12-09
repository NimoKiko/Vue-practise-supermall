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
      clientX: 0,
      startPosition:0,
      endPosition:0,
      currentPosition:0,
      timmer:null,
      rollFlag: true,
    };
  },
  prop: {},
  methods: {
    // 轮播图自动滚动
    picRoll(){
      let swiper = document.querySelector("#swiper > .swiper");
      let swiperItem = document.querySelectorAll("#swiper > .swiper > .swiper-item");
      let indicator = document.querySelectorAll("#swiper .indicator");
      // console.log(indictaor);
      let itemCount = swiperItem.length;
      let index = (this.currentPosition + swiper.offsetWidth) / swiper.offsetWidth;
      if(index < itemCount) {

      }


      let totalWidth = (itemCount - 1) * swiper.offsetWidth;
      if(this.currentPosition < totalWidth && this.rollFlag){
        this.currentPosition += swiper.offsetWidth;
      } else {
        this.rollFlag = false;
      }
      if(this.currentPosition > 0 && !this.rollFlag){
        this.currentPosition -= swiper.offsetWidth;
      } else {
        if(!this.rollFlag) this.currentPosition += swiper.offsetWidth;
        this.rollFlag = true;
      }
      swiper.style.transform = `translateX(-${this.currentPosition}px)`
    },
    touchStart(e) {
      // 点触位置
      clearInterval(this.timmer)
      // this.picRoll();

    },

    touchMove(e) {

    },

    touchEnd(e) {

    },
    // 获取滑块个数
    getItemCount() {
      let itemEls = document.querySelectorAll(
        "#swiper > .swiper > .swiper-item"
      );
      this.slideCount = itemEls.length;
      // console.log(itemEls.length);
    },
  },
  mounted() {
    setTimeout(() => {
      this.getItemCount();
    }, 100);

    this.timmer = setInterval(() => {
      this.picRoll();
    },2000)
  },
};
</script>

<style lang="less" scoped>
#swiper {
  overflow: hidden;
  position: relative;
  .swiper {
    display: flex;
    transition: 1s all linear;
    // transform: translateX(0px);
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
