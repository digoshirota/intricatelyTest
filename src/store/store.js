import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let breadcumb = sessionStorage.getItem("breadcumb");

const store = new Vuex.Store({
    state: {
        breadcumb: breadcumb ? breadcumb : "",
    },
    getters: {
        breadcumb: state => state.breadcumb,
    },
    mutations: {
        
    }
});

export default store;