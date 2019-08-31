import Vue from 'vue';
import Vuex from 'vuex';

import starships from './modules/starships';
import starship from './modules/starship';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    starships,
    starship,
  },
  strict: debug,
});
