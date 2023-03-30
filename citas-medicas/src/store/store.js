import Vuex from "vuex";
import router from "../router";

const store = new Vuex.Store({
  state: {
    count: 0,
    user: null,
    selectedDate: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUser(state, user) {
      console.log("setUser", user);
      state.user = user;
    },
    selectDate(state, dateId) {
      state.selectedDate = dateId;
    },
    logout(state) {
      console.log("Mutation logout");
      state.user = null;
      router.push("/login");
    },
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    login({ commit }, user) {
      commit("setUser", user);
    },
    logout({ commit }) {
      console.log("Action logout");
      commit("logout");
    },
  },
  getters: {
    getCount: (state) => state.count,
    getUser: (state) => state.user,
  },
});

export default store;