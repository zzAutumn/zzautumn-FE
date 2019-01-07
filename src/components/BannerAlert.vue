<template>
  <div class="banner" :class="{active: showBanner}">
    {{content}}
  </div>
</template>

<script>
export default {
  name: 'BannerAlert',
  props: {
    content: {
      type: String,
    },
    messageType: {
      type: String,
    },
  },
  data() {
    return {
      showTimer: null,
    };
  },
  computed: {
    showBanner() {
      this.$nextTick(() => {
        console.log(document.querySelector('.banner').className);
        const className = document.querySelector('.banner').className.split(' ');
        this.showTimer = setTimeout(() => {
          if (className.includes('active')) {
            document.querySelector('.banner').className = className.filter(i => i !== 'active').join(' ');
            console.log(document.querySelector('.banner').className);
          }
        }, 2000);
      });
      return this.content !== '';
    },
  },
  methods: {

  },
};
</script>

<style lang='less' scoped>
.banner{
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:100;
  padding: 10px 20px;
  // transform: translate3d(0,-100%,0);
  opacity: 0;
  transition:0.2s all ease-in-out;
}
.active{
  // transform: translate3d(0,0,0) !important;
  opacity: 1;
  // transition:0s all ease-in-out;
}
</style>
