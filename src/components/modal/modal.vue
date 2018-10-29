<template>
    <transition name="fade">
        <div class="modal" :class="[isvisible?'visible':'','cm-modal','flex']">
            <div class="modal-body">
              <div :class="['icon',type==1?'success-icon':'error-icon']"></div>
              <div class="txt">{{msg}}</div>
              <div class="ok-btn" @click="handleClose">确定</div>
            </div>
        </div>

    </transition>
</template>

<script>
export default {
  data() {
    return {
      type:1,
      isvisible: false,
      msg: ""
    };
  },
  methods:{
    handleClose(){
      this.isvisible=false;
    }
  }
};
</script>

<style lang="less" scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  &.visible .modal-body{
      transform: translateY(0);
  }
  .modal-body{
    width: 5.3rem;
    height: 5.4rem;
    border-radius: .12rem;
    background-color: #fff;
    transition: .3s;
    transform: translateY(-1rem);
    .icon{
      width: 1.5rem;
      height: 1.5rem;

      margin: .93rem auto 0;
    }
    .error-icon{
      background: url("./error-icon.png") center/cover no-repeat;
    }
    .success-icon{
      background: url("./success-icon.png") center/cover no-repeat;
    }
    .txt{
      text-align: center;
      font-size: .36rem;
      color: #333;
      margin: .57rem auto 0;
    }
    .ok-btn{
      width: 3.8rem;
      height: .8rem;
      line-height: .8rem;
      text-align: center;
      background-color: #0099ff;
      border-radius: .06rem;
      color: #fff;
      font-size: .36rem;
      margin: .88rem auto 0;
    }
  }

}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease-out;
}
.fade-enter {
  opacity: 0;
  transform: scale(1.2) translate(-50%,-50%);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translate(-50%,-50%);
}
</style>
