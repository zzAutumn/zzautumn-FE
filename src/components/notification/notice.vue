<template>
  <transition :name="transitionName" @enter="handleEnter" @leave="handleLeave">
    <div :class="classes" :style="styles">
      <template v-if="type === 'notice'">
        <div :class="contentClasses" ref="content" v-html="content"></div>
        <div :class="contentWithIcon">
          <render-cell
            :render="renderFunc"
          ></render-cell>
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
import RenderCell from './render';

export default {
  name: 'Notice',
  components: {
    RenderCell,
  },
  props: {
    transitionName: {
      type: String,
    },
    duration: {
      type: Number,
      default: 1.5,
    },
    type: {
      type: String,
    },
    prefixCls: {
      type: String,
      default: '',
    },
    className: {
      type: String,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    render: {
      type: Function,
    },
    styles: {
      type: Object,
      default() {
        return {
          right: '50%',
        };
      },
    },
    content: {
      type: String,
    },
    withIcon: {
      type: Boolean,
    },
    hasTitle: {
      type: Boolean,
    },
    onClose: {
      type: Function,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      withDesc: false,
    };
  },
  computed: {
    baseClass() {
      return `${this.prefixCls}-notice`;
    },
    classes() {
      return [
        this.baseClass,
        {
          [`${this.className}`]: !!this.className, // !!将弱类型转化为强类型
          [`${this.baseClass}-closable`]: this.closable,
          [`${this.baseClass}-with-desc`]: this.withDesc,
        },
      ];
    },
    contentClasses() {
      return [
        `${this.baseClass}-content`,
        this.render !== undefined ? `${this.baseClass}-content-with-render` : '',
      ];
    },
    contentWithIcon() {
      return [
        this.withIcon ? `${this.prefixCls}-content-with-icon` : '',
        !this.hasTitle && this.withIcon ? `${this.prefixCls}-content-with-render-notice` : '',
      ];
    },
    renderFunc() {
      return this.render || function () {};
    },
  },
  methods: {
    clearCloseTimer() {
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
        this.closeTimer = null;
      }
    },
    handleEnter(el) {
      if (this.type === 'message') {
        el.style.height = `${el.scrollHeight}px`;
      }
    },
    handleLeave(el) {
      if (this.type === 'message') {
        if (document.getElementsByClassName('ivu-message-notice').length !== 1) {
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      }
    },
    close() {
      this.clearCloseTimer();
      this.onClose();
      this.$parent.close(this.name);
    },
  },
  mounted() {
    this.clearCloseTimer();

    if (this.duration !== 0) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.duration * 1000);
    }
  },
  beforeDestroy() {
    this.clearCloseTimer();
  },
};
</script>

<style lang='less' scoped>

</style>
