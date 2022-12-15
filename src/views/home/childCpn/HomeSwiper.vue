<template>
  <swiper>
    <swiper-item v-for="item in banners">
        <img :src="item.image" alt="" @load="imgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  data() {
    return {
      isLoad: false
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
        // console.log(newval);
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imgLoad(){
      if(!this.isLoad) {
        this.$emit("swiperImgLoad");
        this.isLoad = true;
      }

    }
  }
}
</script>

<style lang="less" scoped>
img {
  width: 100%;
}

</style>