import Vue from 'vue';

import {
  STARSHIP_REQUEST,
  STARSHIP_SUCCESS,
  STARSHIP_ERROR,
} from '@/store/actions/starship';

import api from '@/utils/api';

const state = {
  status: '',
  starships: {},
};

/* eslint-disable no-shadow */
const getters = {
  loading: state => state.status === 'loading',
  success: state => state.status === 'success',
  starship: state => state.starship,
};
/* eslint-enable no-shadow */

const actions = {
  [STARSHIP_REQUEST]: ({ commit }, id) => {
    return new Promise((resolve, reject) => {
      commit(STARSHIP_REQUEST);
      api.getStarship(id)
        .then((response) => {
          commit(STARSHIP_SUCCESS, response);
          console.log('responce', response);
          resolve(response);
        })
        .catch((error) => {
          commit(STARSHIP_ERROR);
          console.log('error', error);
          reject(error);
        });
    });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [STARSHIP_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [STARSHIP_SUCCESS]: (state, response) => {
    state.status = 'success';
    Vue.set(state, 'starship', response.data);
  },
  [STARSHIP_ERROR]: (state) => {
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
