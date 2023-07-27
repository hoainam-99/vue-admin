import Vuex from 'vuex';
import Vue from 'vue';
import userStore from "./user";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userStore
    }
})