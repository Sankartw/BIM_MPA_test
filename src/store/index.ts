import Vue from "vue";
import Vuex from "vuex";
import HttpBimService from '@/plugins/service/HttpBimService';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '' as string,
  },
  mutations: {
    setJwt(state, token) {
      state.token = token;
    },
  },
  actions: {
    async checkToken({ commit, state, getters }) {
      const authService = HttpBimService.getInstance();
      const nowTimeStampInSecond = new Date().valueOf() / 1000;
      if (!state.token || getters.jwtPayload.exp < nowTimeStampInSecond) {
        if (!state.token)
          console.log("沒token");
        else if (getters.jwtPayload.exp < nowTimeStampInSecond)
          console.log("token已過期");
        try {
          const { data } = await authService.login()
          if (data.Data) {
            console.log("已取得token");
            commit('setJwt', data.Data);
            return { valid: true };
          } else {
            console.log("無法取得token");
            return { valid: false, url: data.url! };
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(`有token且有效 ${getters.identity}`);
        return { valid: true };
      }
    },
    // async logout({ commit }) {
    //   const authService = HttpBimService.getInstance();
    //   try {
    //     await authService.logout();
    //     commit('clearJwt');
    //     console.log('logout完成')
    //   } catch (error) {
    //     alert('登出發生錯誤');
    //     console.log('logout', error);
    //   }
    // }
  },
  modules: {}
});
