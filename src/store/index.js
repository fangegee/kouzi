import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    deviceId: '',
    loginState: false,
    hotPost: [],
    iptText: ''
  },
  getters: {
    getUserId: state => {
      return state.userData.user_id
    },
    getUserToken: state => {
      return state.userData.user_token
    },
    getDeviceId: state => {
      return state.deviceId
    },
    getUserData: state => {
      return state.userData
    },
    getLoginState: state => {
      return state.loginState
    },
    getIptText: state => {
      return state.iptText
    }
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData
      state.loginState = true
    },
    setDeviceId(state, deviceId) {
      state.deviceId = deviceId
    },
    setHotPost(state, hotPostX) {
      state.hotPost = hotPostX
    },
    setIptText(state, ipt) {
      state.iptText = ipt
    },
    setLoginState(state, status) {
      state.loginState = status
    }
  },
  actions: {},
  modules: {}
});
