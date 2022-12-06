<template>
  <swiper>
    <swiper-item v-for="item in banners">
        <img :src="item.image" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  data() {
    return {
    }
  },
  props:{
    banners:{
      type:Array,
      default() {
        return []
      }
    }
  },
  watch:{
    banners:{
      handler(newval) {
        console.log(newval);
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
}

</style>