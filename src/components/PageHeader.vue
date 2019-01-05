<template>
  <div class="header">
    <div class="row">
      <span class="typo-logo" @click="edit">zzAutumn</span>
      <ul>
        <li><router-link :to="{name: 'archive'}">归档</router-link></li>
        <li><router-link :to="{name: 'books'}">读书</router-link></li>
        <li><router-link :to="{name: 'about'}">关于</router-link></li>
      </ul>
    </div>
    <div class="img-banner">
      <img src="../assets/images/banner.jpg">
    </div>
    <y-modal
      title='确认进入编辑页面'
      :showModal="showModal"
      @closeModal="showModal = false"
      @confirm="modalConfirm"
      ></y-modal>
  </div>
</template>

<script>
import YModal from '@/components/YModal.vue';

export default {
  name: 'PageHeader',
  components: {
    YModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    edit() {
      this.showModal = true;
    },
    modalConfirm() {
      this.$router.push('/edit');
    },
  },
};
</script>

<style lang='less' scoped>
.header {
  .img-banner {
    width: 100%;
    height: 120px;
    border:solid 1px #ddd;
    margin-top: 10px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ddd;
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
    cursor: pointer;
  }
}
</style>
