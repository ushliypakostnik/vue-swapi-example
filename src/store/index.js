import Vue from 'vue';
import Vuex from 'vuex';

import starships from './modules/starships';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    starships,
  },
  strict: debug,
});
