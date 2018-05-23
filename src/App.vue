<template>
  <div id="app">
    <loading v-show='loadingshow'></loading>
    <NavView v-show='navshow'></NavView>
    <transition name='slide-down'>
      <keep-alive>
       <router-view></router-view>
      </keep-alive>
    </transition>
    <FootView></FootView>
  </div>
</template>

<script>
import NavView from "./components/Nav.vue";
import FootView from "./components/Foot.vue";
import Home from "./components/Home.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  components: {
    NavView,
    FootView,
    Home
  },
  computed: {
    ...mapGetters(["navshow", "loadingshow"])
  },
  mounted() {
    const path = this.$route.path;
    this.navChange(path);
  },
  watch: {
    $route(to, from) {
      const path = to.path;
      this.navChange(path);
    }
  },
  methods: {
    navChange(path) {
      if (path == "/userInfo") {
        this.$store.dispatch("NAV_SHOW_FAIL");
      } else {
        this.$store.dispatch("NAV_SHOW_SUCCESS");
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
@import url(./assets/css/index.css);
.slide-down-enter-active,
.slide-down-leave-active {
  transform: translate3d(20px, 30px, 0);
  transform: scale(0.6);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.slide-down-enter,
.slider-down-leave {
  transform: translate3d(0, 0, 0);
  opacity: 1;
  transform: scale(1);
}
</style>
