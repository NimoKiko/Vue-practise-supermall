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
    <slot name="indicator"> </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{ active: index === currentIndex - 1 }"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    interval: {
      type: Number,
      default: 2000,
    },
    animDuration: {
      type: Number,
      default: 1000,
    },
    moveRatio: {
      type: Number,
      default: 0.25,
    },
    showIndicator: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      playTimer: null, // 定时器
      startX: 0, // 开始拖动的位置（起始位置）
      currentX: 0, // 当前的位置
      distance: 0, // 拖动的距离（当前的位置-起始位置）
    };
  },
  methods: {
    /**
     * 定时器相关操作
     *
     */
    // 运行定时器
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    // 停止定时器
    stopTimmer() {
      window.clearInterval(this.playTimer);
    },
    /**
     * 滑块滚动到正确的位置
     */
    scrollContent(currentPosition){
      // 设置滚动状态
      this.scrolling = true;

      // 开始滚动动画
      this.swiperStyle.transition =  `transform 1s`;
      this.setTransform(currentPosition);

      // 判断滚动条滚动到的位置
      this.checkPosition();

      // 滚动完成
      this.scrolling = false;
    },
    /**
     * 校验正确的位置
     */
    checkPosition(){
      window.setTimeout(() => {
        // 校验正确的位置
        this.swiperStyle.transition = `0ms`;
        if(this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if( this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      },this.animDuration)
    },
    /**
     * 设置滚动的位置
     */
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    // 操作DOM 在DOM前后添加slide
    handleDom() {
      // 获取swiper节点
      let swiperEl = document.querySelector(".swiper");
      // 获取滑动的滑块节点
      let slidesEls = swiperEl.getElementsByClassName("slide");

      // 保存可滑动的滑块(图片)个数
      this.slideCount = slidesEls.length;

      // 如果滑块个数>1，在前后添加一个slide
      if (this.slideCount > 1) {
        // 复制第一个和最后一个节点
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
        // 把最后一个节点插入到第一个节点前面
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        // 把第一个节点插入到最后一个节点之后
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        console.log(swiperEl.offsetWidth);
        this.swiperStyle = swiperEl.style;
      }

      // 让swiper元素，显示第一个滑块(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth);
    },
    /**
     * 拖动事件处理
     */
    touchStart(e) {
      // 如果判断当前正在滚动，则不可拖动
      if (this.scrolling) return;

      // 停止定时器
      this.stopTimmer();

      // 保存开始滚动的位置
      // console.log(e);
      this.startX = e.changedTouches[0].clientX;
    },
    touchMove(e) {
      this.currentX = e.changedTouches[0].clientX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      // 设置当前位置
      this.setTransform(moveDistance);
    },
    touchEnd(e) {
      // 获取移动的距离
      let currentMove = Math.abs(this.distance);

      // 判断最终距离
      if(this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex--
      } else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio) {
        this.currentIndex++
      }

      // 移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth);
    },
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();

      this.startTimer();
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
    // transition: 1s all;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
    .indi-item {
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: rgba(42, 42, 42, 0.329);
      line-height: 8px;
      text-align: center;
      font-size: 12px;
      margin: 0 5px;
    }

    .indi-item.active {
      background-color: rgba(255, 255, 255, 0.623);
    }
  }
}
</style>
