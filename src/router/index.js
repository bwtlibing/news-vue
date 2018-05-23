import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../components/Home.vue";
import Follow from "../components/Follow.vue";
import Column from "../components/Column.vue";
import UserInfo from "../components/UserInfo.vue";
import Article from "../components/Article.vue";

var routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/follow",
    component: Follow
  },
  {
    path: "/column",
    component: Column
  },
  {
    path: "/userInfo",
    component: UserInfo
  },
  {
    path: "/article/:id",
    component: Article
  },
  {
    path: "*",
    redirect: "/home"
  }
];

export default new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});
