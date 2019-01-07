<template>
  <div class="edit-page">
    <p class="header">编辑文章</p>
    <quill-editor
      ref="myQuillEditor"
      v-model="form.content"
      :options='editorOption'
    ></quill-editor>
    <div class="tag-bar">
      <span class="tag-label">标签: </span>
      <div class="tags">
        <span class="tag">JS</span>
      </div>
    </div>
    <div class="tag-edit">
      <input type="text">
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
  </div>
</template>

<script>
import YModal from '@/components/YModal.vue';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

import { quillEditor } from 'vue-quill-editor';

export default {
  name: 'EditPage',
  components: {
    quillEditor,
    YModal,
  },
  data() {
    return {
      editorOption: {},
      showModal: false,
      password: '',
      isWrong: false,
      form: {
        content: '',
      },
    };
  },
  methods: {
    cancel() {
      this.showModal = false;
      this.isWrong = false;
      this.password = '';
    },
    async modalConfirm() {
      if (this.password !== 'bugbug') {
        this.isWrong = true;
        return false;
      }
      console.log(this.form.content);
      // const result = await this.$service.article.saveArticle();

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
