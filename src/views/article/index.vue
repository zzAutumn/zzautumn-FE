<template>
  <div class="article">
    <page-header></page-header>
    <div class="wrapper">
      <div class="title">{{title}}</div>
      <div class="content" v-html="content"></div>
      <div class="tags">
        <img src="@/assets/icons/tag.svg" >
        <span class="tag-title">标签: </span>
        <span class="tag" v-for="(item, index) in tags" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="footer">
      <div>
        <img src="@/assets/icons/left-arrow.svg">
        <span class="back" @click="back">返回</span>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'Article',
  components: {
    PageHeader,
  },
  data() {
    return {
      id: null,
      content: '',
      title: '',
      tags: [],
    };
  },
  methods: {
    async getData(id) {
      const result = await this.$service.article.getArticleById({ id });
      if (result.code === '200') {
        const {
          title, content, assignTags,
        } = result.data;
        const tags = assignTags.split(',');
        this.content = content;
        this.title = title;
        this.tags = tags;
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    const { id } = this.$route.params;
    this.id = id;
    this.getData(id);
  },
};
</script>

<style lang='less' scoped>
.article {
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  .wrapper {
    flex: 1;
    .title {
      margin-top: 20px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 34px;
      letter-spacing: 2px;
    }
    .content {
      margin: 20px 0;
    }
    .tags {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 24px;
      }
      .tag-title {
        display: inline-block;
        margin-right: 20px;
      }
      .tag {
        display: inline-block;
        margin: 0 5px;
      }
    }
  }
  .footer {
    div {
      display: flex;
      align-items: center;
      img {
        height: 24px;
      }
      .back {
        display: inline-block;
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }
}
</style>
