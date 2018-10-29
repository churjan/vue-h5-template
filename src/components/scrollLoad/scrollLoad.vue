<template>
    <div>
        <div class="loading" v-show="isLoading"></div>

    </div>
</template>

<script>
export default {
    props:{
        isLoading:{
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
            trigger:0.9
            // _isLoading:this.isLoading,
        }
    },
  mounted() {

    document.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if ((scrollTop + window.innerHeight)/document.body.scrollHeight >= this.trigger && this.isLoading==false) {
        // 触发加载数据
        console.log("触发了");
        this.$emit('loading');
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.loading {
  width: 100vw;
  height: .5rem;
  background: url("./loading.gif") center/.5rem .5rem no-repeat #fff;
}
</style>
