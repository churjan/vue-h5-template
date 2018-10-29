<template>
 <div>
  <div>打开box</div>
  <div v-if="isShowBox">box盒子</div>
 </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted(){

  },
  data () {
    return {

    }
  },
  computed:{
    ...mapState({
      isShowBox: state => state.isShowBox
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
