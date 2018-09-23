<template>
    <div style="padding: 15px;">
        <div>
            <span v-once>这里的值永远不会改变：{{ msg }}</span>
            <div style="margin: 10px;">
                <a :href="url" :title="name">{{name}}</a>
            </div>
            <div @click="changeUrl">修改内容</div>
        </div>
        <div id="computed_props">
            千米 :
            <input type="text" v-model="kilometers"> 米 :
            <input type="text" v-model="meters">
        </div>
        <div style="width: 3rem; border: 1px solid; textAlign: center; margin:15px auto; lineHeight: 44px; borderRadius: 4px;">
            <input type="button" value="去个人中心" @click="goMine">
        </div>
        <hr>
        <form v-on:submit.prevent="onSubmit">
            <label>name:
                <input type="text" :value="userName" @change="changeUserName">
            </label>
            <p>单个复选框：</p>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
            <p>多个复选框：</p>
            <input type="checkbox" id="runoob" value="Runoob" v-model="checkedNames">
            <label for="runoob">Runoob</label>
            <input type="checkbox" id="google" value="Google" v-model="checkedNames">
            <label for="google">Google</label>
            <input type="checkbox" id="taobao" value="Taobao" v-model="checkedNames">
            <label for="taobao">taobao</label>
            <br>
            <span>选择的值为: {{ checkedNames }}</span>
            <br>
            <select v-model="selected" name="fruit">
                <option value="">选择一个网站</option>
                <option value="www.runoob.com">Runoob</option>
                <option value="www.google.com">Google</option>
            </select>
            <div id="output">
                选择的网站是: {{selected}}
            </div>
            <button type="submit">提交</button>
        </form>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      userName: "",
      name: "Google",
      url: "https://www.google.com",
      msg: "测试内容~",
      kilometers: 0,
      meters: 0,
      checked: false,
      checkedNames: [],
      selected: ""
    };
  },
  watch: {
    kilometers: function(val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  },
  computed: {
    site: {
      get: function() {
        return this.name + " " + this.url;
      },
      set: function(newValue) {
        var names = newValue.split(" ");
        this.name = names[0];
        this.url = names[names.length - 1];
      }
    }
  },
  methods: {
    changeUserName(e) {
      console.log(e.target.value);
    },
    onSubmit() {
      console.log("提交");
    },
    changeUrl() {
      this.site = "百度 https:www.baidu.com";
    },
    goMine() {
      this.$router.push({
        path: "/mine"
      });
    }
  }
};
</script>
<style scoped>
</style>
