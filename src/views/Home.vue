<template>
  <div class="home">
    <page-header></page-header>
      <div class="main-wrap">
        <transition-group name="fade-transform">
          <div class="card" v-for="(item, index) in articleList" :key="`${index}-${item.title}`" @click="handleClick(item.id)">
            <p class="title"><img src="@/assets/icons/office.svg"> {{item.title}}</p>
            <p class="date"><img src="@/assets/icons/calendar.svg"> {{item.updateDate}}</p>
          </div>
        </transition-group>
      </div>
    <div class="page">
      <span @click="prevPage">上一页</span>
      <span @click="nextPage">下一页</span>
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
  data() {
    return {
      queryForm: {
        pageIndex: 1,
        pageSize: 9,
        title: '', // 1 6 7 10 11 12
      },
      articleList: [],
    };
  },
  methods: {
    async getData() {
      const result = await this.$service.article.getArticles(this.queryForm);
      if (result.code === '200') {
        this.articleList = result.data.content;
      }
    },
    prevPage() {
      if (this.queryForm.pageIndex === 1) {
        return;
      }
      this.queryForm.pageIndex -= 1;
      this.getData();
    },
    nextPage() {
      if (this.articleList.length < 9) {
        return;
      }
      this.queryForm.pageIndex += 1;
      this.getData();
    },
    handleClick(id) {
      console.log(id);
      this.$router.push(`/article/${id}`);
    },
  },
  created() {
    this.getData();
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
  .main-wrap span {
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
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s ease-in-out;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
