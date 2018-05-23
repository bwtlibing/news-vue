<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	            <li v-for="(item,index) in arrList" :key="index">
	            	<a href="/">
	                    <h2>{{index}}.{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
export default {
  data() {
    return {
      arrList: []
    };
  },
  mounted() {
    this.feachDate();
  },
  methods: {
    feachDate() {
      var _self = this;
      this.$http
        .get("../src/data/follow.data")
        .then(result => {
          console.log(result);
          _self.arrList = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.mt40 {
  margin-top: 40px;
}
</style>