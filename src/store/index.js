import Vuex from 'vuex'
import Vue from 'vue'
import { LoginUser, RegisterUser } from '../services/auth.service'

Vue.use(Vuex)

const initialState = {
  user: 'John',
  token: ''
}

const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData
    },
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await LoginUser(payload)
      const { user, token } = data

      commit('setUserData', user)
      commit('setToken', token)
    },
    async registration({ commit }, payload) {
      const { data } = await RegisterUser(payload)
      const { user, token } = data

      commit('setUserData', user)
      commit('setToken', token)
    }
  }
})

export default store