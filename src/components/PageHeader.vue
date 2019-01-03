<template>
  <div class="header">
    <div class="row">
      <span class="typo-logo">zzAutumn</span>
      <ul>
        <li><router-link :to="{name: 'archive'}">归档</router-link></li>
        <li><router-link :to="{name: 'books'}">读书</router-link></li>
        <li><router-link :to="{name: 'about'}">关于</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style lang='less' scoped>
.header {
  border-bottom: 2px solid #ddd;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    margin-bottom: 0;
    width: 60%;
    justify-content: space-evenly;
    li a{
      text-decoration: none;
      font-size: 1.5rem;
      display: inline-block;
      color: #424444;
    }
  }
  .typo-logo {
    position: relative;
    display: inline-block;
    font-size: 4rem;
    color: #424444;
    text-shadow: 3px 3px 0px #e7eef1, 8px 8px 0px rgba(0,0,0,.1);
  }
}
</style>
