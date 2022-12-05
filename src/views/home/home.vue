<template>
  <div id="home">
    <h1>home</h1>
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods:{
    getData(){
      this.$store.dispatch("getMultidata").then(res => {
        console.log(res);
      })
    }
  }

}
</script>

<style>

</style>
