<template>
  <div class="edit-page">
    <p class="header">编辑文章</p>
    <div class="row">
      <span class="form-title">文章标题: </span>
      <input type="text" v-model="form.title">
    </div>
    <quill-editor
      ref="myQuillEditor"
      v-model="form.content"
      :options='editorOption'
    ></quill-editor>
    <div class="tag-bar">
      <span class="tag-label">标签: </span>
      <div class="tags">
        <span class="tag" v-for="(item, index) in form.tags" :key="index">{{item}}</span>
      </div>
    </div>
    <div class="tag-edit">
      <input type="text" placeholder="按enter键提交" v-model="tag" @keyup.enter="pushTag">
    </div>
    <div class="footer">
      <button class="btn btn-cancel" @click="$router.push('/')">返回</button>
      <button class="btn btn-confirm" @click="showModal = true">提交</button>
    </div>
    <y-modal
      title="发布文章"
      :showModal="showModal"
      @closeModal="cancel"
      @confirm="modalConfirm"
      >
      <div slot="content" class="dialog-content">
        <input type="password" placeholder="password" v-model="password">
        <span v-show="isWrong">错误的提交密码！</span>
      </div>
      </y-modal>
      <banner-alert
        :content='alertMessage'
        :showBanner="showBanner"
        @closeBanner="closeBanner"
      ></banner-alert>
  </div>
</template>

<script>
import YModal from '@/components/YModal.vue';
import BannerAlert from '@/components/BannerAlert.vue';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'EditPage',
  components: {
    quillEditor,
    YModal,
    BannerAlert,
  },
  data() {
    return {
      showBanner: false,
      editorOption: {},
      showModal: false,
      password: '',
      isWrong: false,
      tag: '',
      form: {
        content: '',
        title: '',
        tags: [],
      },
      alertMessage: '',
    };
  },
  methods: {
    pushTag() {
      if (this.tag !== '') {
        this.form.tags.push(this.tag);
        this.tag = '';
      }
    },
    closeBanner() {
      this.alertMessage = '';
      this.showBanner = false;
    },
    cancel() {
      this.showModal = false;
      this.isWrong = false;
      this.password = '';
    },
    async modalConfirm() {
      console.log(this.form);
      if (this.password !== 'bugbug') {
        this.isWrong = true;
        return false;
      }
      const result = await this.$service.article.saveArticle(this.form);
      console.log(result);
      if (result.code === '200') {
        this.alertMessage = '保存文章成功';
        this.showBanner = true;
        this.cancel();
      }
      return true;
    },
  },
};
</script>

<style lang='less' scoped>
.edit-page {
  padding: 20px 30px;
  .header {
    font-size: 1.5rem;
  }
  .row {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    .form-title {
      width: 80px;
    }
    input {
      width: 200px;
    }
  }
  .quill-editor {
    /deep/ .ql-container {
      min-height: 600px;
    }
  }
  .tag-bar {
    margin-top: 20px;
    height: 40px;
    border: solid 1px #ddd;
    display: flex;
    padding: 0 30px;
    align-items: center;
    .tag-label {
      display: inline-block;
      position: relative;
      &:before {
        content: '';
        background-image: url('../../assets/icons/tag.svg');
        left: -25px;
        top: 0;
        width: 34px;
        position: absolute;
        height: 24px;
        background-size: 70%;
        background-repeat: no-repeat;
      }
    }
    .tag {
      border: solid 1px #ddd;
      padding: 2px 10px;
      border-radius: 5px;
      background: #eee;
      margin-left: 10px;
      display: inline-block;
    }
  }
  .tag-edit {
    margin-top: 20px;
    input {
      height: 20px;
      width: 200px;
      border-radius: 5px;
      outline: none;
    }
  }
  .footer {
    margin-top: 20px;
    text-align: center;
  }
  .dialog-content {
    input {
      height: 30px;
      outline: none;
    }
    span {
      color: red;
      display: inline-block;
      margin-left: 10px;
    }
  }
}
</style>
