<!--
  功能：功能描述
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2022年12月13日 16:11:08
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div id="category">
    <div class="content">
      <ul>
        <li>分类列表1</li>
        <li>分类列表2</li>
        <li>分类列表3</li>
        <li>分类列表4</li>
        <li>分类列表5</li>
        <li>分类列表6</li>
        <li>分类列表7</li>
        <li>分类列表8</li>
        <li>分类列表9</li>
        <li>分类列表10</li>
        <li>分类列表11</li>
        <li>分类列表12</li>
        <li>分类列表13</li>
        <li>分类列表14</li>
        <li>分类列表15</li>
        <li>分类列表16</li>
        <li>分类列表17</li>
        <li>分类列表18</li>
        <li>分类列表19</li>
        <li>分类列表20</li>
        <li>分类列表21</li>
        <li>分类列表22</li>
        <li>分类列表23</li>
        <li>分类列表24</li>
        <li>分类列表25</li>
        <li>分类列表26</li>
        <li>分类列表27</li>
        <li>分类列表28</li>
        <li>分类列表29</li>
        <li>分类列表30</li>
        <li>分类列表31</li>
        <li>分类列表32</li>
        <li>分类列表33</li>
        <li>分类列表34</li>
        <li>分类列表35</li>
        <li>分类列表36</li>
        <li>分类列表37</li>
        <li>分类列表38</li>
        <li>分类列表39</li>
        <li>分类列表40</li>
        <li>分类列表41</li>
        <li>分类列表42</li>
        <li>分类列表43</li>
        <li>分类列表44</li>
        <li>分类列表45</li>
        <li>分类列表46</li>
        <li>分类列表47</li>
        <li>分类列表48</li>
        <li>分类列表49</li>
        <li>分类列表50</li>
        <li>分类列表51</li>
        <li>分类列表52</li>
        <li>分类列表53</li>
        <li>分类列表54</li>
        <li>分类列表55</li>
        <li>分类列表56</li>
        <li>分类列表57</li>
        <li>分类列表58</li>
        <li>分类列表59</li>
        <li>分类列表60</li>
        <li>分类列表61</li>
        <li>分类列表62</li>
        <li>分类列表63</li>
        <li>分类列表64</li>
        <li>分类列表65</li>
        <li>分类列表66</li>
        <li>分类列表67</li>
        <li>分类列表68</li>
        <li>分类列表69</li>
        <li>分类列表70</li>
        <li>分类列表71</li>
        <li>分类列表72</li>
        <li>分类列表73</li>
        <li>分类列表74</li>
        <li>分类列表75</li>
        <li>分类列表76</li>
        <li>分类列表77</li>
        <li>分类列表78</li>
        <li>分类列表79</li>
        <li>分类列表80</li>
        <li>分类列表81</li>
        <li>分类列表82</li>
        <li>分类列表83</li>
        <li>分类列表84</li>
        <li>分类列表85</li>
        <li>分类列表86</li>
        <li>分类列表87</li>
        <li>分类列表88</li>
        <li>分类列表89</li>
        <li>分类列表90</li>
        <li>分类列表91</li>
        <li>分类列表92</li>
        <li>分类列表93</li>
        <li>分类列表94</li>
        <li>分类列表95</li>
        <li>分类列表96</li>
        <li>分类列表97</li>
        <li>分类列表98</li>
        <li>分类列表99</li>
        <li>分类列表100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
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
    let wrapper = document.querySelector("#category > .content");
    let scroll = new BScroll(wrapper,{

    });
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
  activated() {},
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
#category {
  .content {
    width: 100%;
    height: 500px;
    background: darkorange;
    overflow: hidden;
  }
}
</style>
