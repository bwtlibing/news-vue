
import LoadingComponent from './Loading.vue'

const loading ={
    install:function(Vue){
      Vue.component('loading',LoadingComponent)
    }
}
export default loading

// const LoadingComponent = require('./Loading.vue')
// const loading = {
//   install: function (Vue) {
//     Vue.component('loading', LoadingComponent)
//   }
// }
// module.exports = loading

