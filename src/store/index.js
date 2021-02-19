import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// const url = "https://icanhazdadjoke.com";
// const headers = { Accept: "application/json" };

export default new Vuex.Store({
  state: {
    currentJoke: "This is a joke",
    allJokes: []
  },
  mutations: {
    //syncrous
    setCurrentJoke(state, payload) {
      state.currentJoke = payload;
      state.allJokes.push(payload);
    }
  },
  actions: {
    //asyncronous
    async setCurrentJoke(state) {
      const random = Math.floor(Math.random() * 2);
      const joke = await fetch(`https://my-json-server.typicode.com/wongyongren/demo/modes/?id=${random}`);
      const j = await joke.json();
      this.totalVuePackages = j[0].id;
      state.commit("setCurrentJoke", j[0].id);
      console.log(this.totalVuePackages);
      setInterval(() => this.joke , 1000);
    }
  },
  modules: {},
  getters: {
    getCurrentJoke: state => state.currentJoke,
    getAllJokes: state => state.allJokes
  }
});
