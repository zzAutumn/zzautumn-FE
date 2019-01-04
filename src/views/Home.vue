<template>
  <div class="home">
    <page-header></page-header>
    <div class="main-wrap">
      <div class="card">
        <p class="title"><img src="@/assets/icons/office.svg"> JS 数组的几个常用方法</p>
        <p class="date"><img src="@/assets/icons/calendar.svg"> 2019-01-04</p>
        <p class="abstract">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
    <div class="page">
      <span>上一页</span>
      <span>下一页</span>
    </div>
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
  .main-wrap {
    flex: 1;
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    .card {
      border: solid #ddd 1px;
      height: 186px;
      box-sizing: border-box;
      box-shadow: 3px 0 1px #eee;
      cursor: pointer;
      transform: all 0.3s ease;
      transform: scale(0.95, 0.95);
      .title,.date {
        text-align: center;
      }
      .title {
        font-size: 1.3rem;
        img {
          height: 19px;
          display: inline-block;
          margin-right: 10px;
        }
      }
      .date img {
        height: 19px;
        display: inline-block;
        margin-right: 10px;
        vertical-align: sub;
      }
      .abstract {
        padding: 0 20px;
        text-indent: .1rem;
        height: 50px;
        width: 350px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:hover {
        box-shadow: 5px 0 1px #eee;
        transform: scale(1, 1);
      }
    }
  }
  .page {
    display: flex;
    justify-content: space-between;
    flex: 0 0 30px;
    span {
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>
