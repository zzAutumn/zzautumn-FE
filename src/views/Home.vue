<template>
  <div class="home">
    <page-header></page-header>
  </div>
</template>

<script>
// @ is an alias to /src
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'home',
  components: {
    PageHeader,
  },
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
}
</style>
