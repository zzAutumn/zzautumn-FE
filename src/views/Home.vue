<template>
  <div class="home">
    <page-header></page-header>
    <page-footer></page-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';

export default {
  name: 'home',
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  height: 100%;
  justify-content: space-between;
}
</style>
