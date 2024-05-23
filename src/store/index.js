import { createStore } from "vuex";

export default createStore({
  state: {
    userInfors: [],
  },
  getters: {},
  mutations: {
    setUserInfors(state, userInfors) {
      state.userInfors = userInfors;
    },
  },
  actions: {
    async fetchUserInfor({ commit }, { page, results }) {
      const res = await fetch(
        `https://randomuser.me/api/?page=${page}&results=${results}`
      );
      const data = await res.json();
      commit("setUserInfors", data.results);
    },
    sortbyFullname({ commit, state }) {
      const userInfors = state.userInfors.sort((a, b) => {
        return a.name.first.localeCompare(b.name.first);
      });
      commit("setUserInfors", userInfors);
    },
    sortbyUsername({ commit, state }) {
      const userInfors = state.userInfors.sort((a, b) => {
        return a.login.username.localeCompare(b.login.username);
      });
      commit("setUserInfors", userInfors);
    },
  },
});
