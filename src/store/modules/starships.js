import Vue from 'vue';

import {
  STARSHIPS_REQUEST,
  STARSHIPS_SUCCESS,
  STARSHIPS_ERROR,
} from '@/store/actions/starships';

import api from '@/utils/api';

const state = {
  status: '',
  starships: {},
};

/* eslint-disable no-shadow */
const getters = {
  loading: state => !!(state.status === 'loading'),
  success: state => !!(state.status === 'success'),
  starships: state => state.starships,
};
/* eslint-enable no-shadow */

const actions = {
  [STARSHIPS_REQUEST]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(STARSHIPS_REQUEST);
      api.getStarships()
        .then((response) => {
          commit(STARSHIPS_SUCCESS, response);
          console.log('responce', response);
          resolve(response);
        })
        .catch((error) => {
          commit(STARSHIPS_ERROR);
          console.log('error', error);
          reject(error);
        });
    });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [STARSHIPS_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [STARSHIPS_SUCCESS]: (state, response) => {
    state.status = 'success';
    Vue.set(state, 'starships', response.data.results);
  },
  [STARSHIPS_ERROR]: (state) => {
    state.status = 'error';
  },
};
/* eslint-enable no-shadow */

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
