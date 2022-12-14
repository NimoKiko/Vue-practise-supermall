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
      <div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
        <div>32</div>
        <div>33</div>
        <div>34</div>
        <div>35</div>
        <div>36</div>
        <div>37</div>
        <div>38</div>
        <div>39</div>
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
        <div>48</div>
        <div>49</div>
        <div>50</div>
        <div>51</div>
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
        <div>64</div>
        <div>65</div>
        <div>66</div>
        <div>67</div>
        <div>68</div>
        <div>69</div>
        <div>70</div>
        <div>71</div>
        <div>72</div>
        <div>73</div>
        <div>74</div>
        <div>75</div>
        <div>76</div>
        <div>77</div>
        <div>78</div>
        <div>79</div>
        <div>80</div>
        <div>81</div>
        <div>82</div>
        <div>83</div>
        <div>84</div>
        <div>85</div>
        <div>86</div>
        <div>87</div>
        <div>88</div>
        <div>89</div>
        <div>90</div>
        <div>91</div>
        <div>92</div>
        <div>93</div>
        <div>94</div>
        <div>95</div>
        <div>96</div>
        <div>97</div>
        <div>98</div>
        <div>99</div>
        <div>100</div>
      </div>
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
    height: 90vh;
    background: darkorange;
    overflow: hidden;
    div{
      div{
        background: black;
      }
    }
  }
}
</style>
