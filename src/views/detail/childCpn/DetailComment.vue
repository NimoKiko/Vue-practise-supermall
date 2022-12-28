<!--
  功能：商品评论组件
  作者：黄逸凡
  邮箱：973528232@qq.com
  时间：2022年12月28日 11:47:58
  版本：v1.0
  修改记录：
  修改内容：
  修改人员：
  修改时间：
-->
<template>
  <div class="comment-info-wrap" v-if="Object.keys(comment).length !== 0">
    <div class="comment-title flex">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div v-for="item in comment">
      <div class="comment-user-info">
        <span><img :src="item.user.avatar" alt="" class="avatar" /></span>
        <span>{{ item.user.uname }}</span>
      </div>
      <div class="comment-text">{{ item.content }}</div>
      <div class="comment-goods-info">
        <span class="comment-time">{{ showDate(item.created) }}</span>
        <span>{{ item.style }}</span>
      </div>
      <div class="flex">
        <div class="comment-info-images" v-for="item in item.images">
          <img :src="item" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "@/common/utils/utils";
export default {
  // 组件名称
  name: "DetailComment",
  // 组件参数 接收来自父组件的数据
  props: {
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {};
  },
  // 过滤器
  filters: {
    showDate(value) {
      //将时间戳转换成date对象
      const date = new Date(value * 1000);
      //将date进行格式化
      return formatDate(date, "yyyy-MM-dd");
    },
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    showDate(value) {
      //将时间戳转换成date对象
      const date = new Date(value * 1000);
      //将date进行格式化
      return util.formatDate(date, "yyyy-MM-dd");
    },
  },
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
  mounted() {},
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
.comment-info-wrap {
  border-top: 10px solid rgb(242, 242, 242);
  padding: 0 8px;
  font-size: 14px;
  border-bottom: 4px solid #ececec;
  .comment-title {
    justify-content: space-between;
    border-bottom: 1px solid #ececec;
    padding: 10px 4px;
  }
  .comment-user-info {
    padding: 10px 0;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .comment-text {
    line-height: 20px;
  }
  .comment-goods-info {
    color: #999;
    margin: 4px 0;
    .comment-time {
      margin-right: 10px;
    }
  }
  .comment-info-images {
    img {
      width: 60px;
      height: 60px;
      margin-right: 6px;
    }
  }
}
</style>
