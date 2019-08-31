import Vue from 'vue';

import {
  USER_REQUEST,
  USER_ERROR,
  USER_SUCCESS,
} from '@/store/actions/user';

import api from '@/utils/api';
import storage from '@/utils/storage'; // eslint-disable line

const state = {
  status: '',
  profile: {},
};

/* eslint-disable no-shadow */
const getters = {
  getProfile: state => state.profile,
  isProfileLoaded: state => !!state.profile.username,
};
/* eslint-enable no-shadow */

const actions = {
  [USER_REQUEST]: ({ commit, dispatch }) => {
    commit(USER_REQUEST);
    api.getUserProfile()
      .then((responce) => {
        commit(USER_SUCCESS, responce);
        storage.setUserProfile(responce);
      })
      .catch(() => {
        commit(USER_ERROR);
        // if resp is unauthorized, logout, to
        dispatch('auth/AUTH_LOGOUT', null, { root: true });
      });
  },
};

/* eslint-disable no-shadow */
const mutations = {
  [USER_REQUEST]: (state) => {
    state.status = 'loading';
  },
  [USER_SUCCESS]: (state, responce) => {
    state.status = 'success';
    Vue.set(state, 'profile', responce.data.user);
  },
  [USER_ERROR]: (state) => {
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
