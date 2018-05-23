<template>
    <div class="home">
      <ul class="mg30">
        <li v-for="(item, index) in headerItem"  :key="index">
           <router-link :to="'/article/'+item.id">
              <h2>{{index+1}}.{{item.title}}</h2>
                <p>{{item.detail}}</p>
           </router-link>

        </li>
	    </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      headerItem: []
    };
  },
  mounted() {
    console.log("挂载成功");
    this.fetchDate();
  },
  methods: {
    fetchDate() {
      var _self = this;
      this.$http
        .get("src/data/index.data")
        .then(result => {
          console.log(result);
          _self.headerItem = result.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.home {
  padding: 20px 20px;
}
.mg30 {
  margin-top: 30px;
}
.mg30 li {
  margin-bottom: 20px;
}
</style>
