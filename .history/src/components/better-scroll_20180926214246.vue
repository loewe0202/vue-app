<template>
	<div class="container">
		<div class="wrapper" ref="wrapper">
   			<ul class="content">
      			<li class="list-item" v-for="(item,index) in data" :key="index">{{item.cparagraph}}</li>
    		</ul>
  		</div>
	</div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        data: []
      }
    },
    created() {
      this.axios.get('https://www.easy-mock.com/mock/5bab0dbf9f43b479fb7c87e3/app/list').then((res) => {
        this.data = res.data.data.list;
        this.$nextTick(()=>{
        	this.scroll = new BScroll(this.$refs.wrapper, {})
        })
      })
    }
  }
</script>
<style scoped lang="scss">
@import "@/assets/css/common.scss";
.container {
	padding: 15px 0;
	background: #fff;
	height: rem(300);
}
.wrapper {
	position: absolute;
	margin: auto;
	overflow: hidden;
	height: rem(300);
	width: 100%;
	max-width: 750px;
	min-width: 320px;
}
.content {
	padding: 0 15px;
}

.list-item {
  font-size: 17px;
}

</style>
