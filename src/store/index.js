import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score:""
  },
  mutations: {
    onSelected(state,n){
      state.score += " "+n;
      console.log(state.score)
    }
  },
  actions: {
  },
  modules: {
  },
  // getters:{
  //   score:state =>{return state.score}
  // }
})
