<template>
  <div class="modal" id='y-modal' aria-hidden="true">
    <div class="modal-dialoag">
      <div class="modal-header">
        <p>确认进入编辑页面</p>
        <span class="close-btn" @click="close"><img src="@/assets/icons/close.svg"></span>
      </div>
      <div class="modal-body">
        <p>example :D</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-cancle" @click="close">取消</button>
        <button class="btn btn-confirm">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YModal',
  props: {
    showModal: {
      type: Boolean,
    },
  },
  watch: {
    showModal(val) {
      console.log(val);
      const aEle = document.createElement('a');
      if (val) {
        aEle.href = '#y-modal';
        aEle.click();
      } else {
        aEle.href = '#';
        aEle.click();
      }
    },
  },
  methods: {
    close() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style lang='less' scoped>
// mixin for transition/transform
.translate(@x, @y) {
  transform: translate(@x, @y);
}
.transition-transform(@transition) {
  transition: transform @transition;
}
.modal {
  // modal bg
  &:before {
    content: '';
    display: none;
    background: rgba(0, 0, 0, .6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
  &:target{
    &:before {
      display: block;
    }
    .modal-dialoag {
      .translate(0, 0);
      top: 20%;
    }
  }
}

// modal dialog
.modal-dialoag {
  background: #fefefe;
  border: solid 1px #ddd;
  border-radius: 5px;
  margin-left: -200px;
  position: fixed;
  left: 50%;
  top: -100%;
  z-index: 11;
  width: 360px;
  .translate(0, -500%);
  .transition-transform(~"0.3s ease-out");
  .modal-header {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    .close-btn img{
      width: 70%;
      cursor: pointer;
    }
  }
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    padding-right: 10px;
    .btn {
      border-radius: 2px;
      font-size: 0.9rem;
      padding: 6px 12px;
      cursor: pointer;
      outline: none;
      &:first-child {
        margin-right: 5px;
      }
      &-confirm {
        box-shadow: inset 0 1px 0 0 #4d73bf;
        background: #4267b2;
        border:solid 1px #4267b2;
        color: #fff;
        text-shadow: 0 1px 0 #3359a5;
        &:hover {
          background: #2b54a7;
        }
        &:active {
          background: #1d4698;
          border-color: #1d4698;
        }
      }
      &-cancle {
        background: #f6f7f9;
        border: solid 1px #ced0d4;
        color: #4b4f56;
        &:hover {
          background: #e9ebee;
        }
        &:active {
          background: #d8dade;
          border-color: #d8dade;
        }
      }
    }

  }
}
</style>
