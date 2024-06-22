import { createStore } from 'vuex'
import cookies from 'js-cookie'

export default createStore({
  state: {
    userdata: null,
   
  },
  getters: {

  },
  mutations: {
    SET_LOGIN(state, payload){
        state.userdata = payload;
    },
    SET_LOGOUT(state){
      cookies.remove("userdata")
      state.userdata = null;
    }
  },
  actions: {
    logout({commit}, router){
      if(confirm('sudah logout')){
        commit('SET_LOGOUT')
        router.push({path: '/login'})
      }
    }
  }
})
