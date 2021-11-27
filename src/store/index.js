import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

import auth from './auth/index.js';

const store = new Vuex.Store({
    modules:{
        auth:auth,
    }
})

export default store;