<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}
</style>