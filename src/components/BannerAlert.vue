<template>
  <div class="banner">
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
    showBanner: {
      type: Boolean,
    },
  },
  data() {
    return {
      showTimer: null,
    };
  },
  watch: {
    showBanner(val) {
      if (val) {
        document.querySelector('.banner').classList.add('active');
        this.showTimer = setTimeout(() => {
          document.querySelector('.banner').classList.remove('active');
          this.$emit('closeBanner');
        }, 2000);
      }
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
  transform: translate3d(0,-1000%,0);
  transition:0.2s all ease-in-out;
  background-color: #a64ace;
  color: #fff;
  font-weight: 600;
}
.active{
  transform: translate3d(0,0,0) !important;
  transition:0.2s all ease-in-out;
}
</style>
