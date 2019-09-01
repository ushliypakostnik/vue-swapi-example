import Vue from 'vue';

import {
  STARSHIPS_REQUEST,
  STARSHIPS_SUCCESS,
  STARSHIPS_ERROR,
  STARSHIPS_SEARCH,
} from '@/store/actions/starships';

import api from '@/utils/api';

const state = {
  status: '',
  starships: {},
  query: '',
};

/* eslint-disable no-shadow */
const getters = {
  loading: state => state.status === 'loading',
  success: state => state.status === 'success',
  starships: state => state.starships,
  query: state => state.query,
};
/* eslint-enable no-shadow */

const actions = {
  [STARSHIPS_REQUEST]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(STARSHIPS_REQUEST);
      api.getStarships()
        .then((response) => {
          commit(STARSHIPS_SUCCESS, response);
          resolve(response);
        })
        .catch((error) => {
          commit(STARSHIPS_ERROR);
          reject(error);
        });
    });
  },
  [STARSHIPS_SEARCH]: ({ commit }, query) => {
    commit(STARSHIPS_SEARCH, query);
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [STARSHIPS_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [STARSHIPS_SUCCESS]: (state, response) => {
    state.status = 'success';
    state.starships = response.data.results;
  },
  [STARSHIPS_ERROR]: (state) => {
    state.status = 'error';
  },
  [STARSHIPS_SEARCH]: (state, query) => {
    state.query = query;
  }
};
/* eslint-enable no-shadow */

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
