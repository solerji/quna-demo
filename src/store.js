import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

Vue.use(Vuex)
//拆分模块可以提高性能

export default new Vuex.Store({
  state: state,
  mutations: {
    changeCity(state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  },
  actions: {
    changeCity(ctx, city) {
      ctx.commit('changeCity', city)
    }
  }
})
