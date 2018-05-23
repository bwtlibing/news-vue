import {
  NAV_SHOW_SUCCESS,
  NAV_SHOW_FAIL,
  SHOW_LOADING,
  HIDE_LOADING
} from "./types";

const state = {
  navshow: false,
  loadingshow: false
};

//ss
const mutations = {
  [NAV_SHOW_SUCCESS](state) {
    state.navshow = true;
  },
  [NAV_SHOW_FAIL](state) {
    state.navshow = false;
  },
  [SHOW_LOADING](state) {
    state.loadingshow = true;
  },
  [HIDE_LOADING](state) {
    state.loadingshow = false;
  }
};

const getters = {
  navshow(state) {
    return state.navshow;
  },
  loadingshow(state) {
    return state.loadingshow;
  }
};
export default {
  state,
  mutations,
  getters
};
