<template>
  <div>
    <div class="page">
      <div class="page__bd">
        {{num}}
        <mt-tabbar v-model="selected" fixed value="selected">
          <mt-tab-item id="外卖">
            <img slot="icon" src="../assets/logo.png"> 外卖
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="../assets/logo.png"> 发现
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="../assets/logo.png"> 我的
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  data() {
    return {
      selected: "外卖"
    }
  },
  computed: {
    num() {
      return this.selected
    }
  }
}

</script>
<style scoped>


</style>
