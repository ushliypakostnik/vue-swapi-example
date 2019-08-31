import axios from 'axios';
import Cookies from 'js-cookie';

import { COOKIES, LOCAL } from '@/utils/constants';

// Auto auth
export const AutoAuth = Cookies.get(COOKIES.TOKEN.name);
if (AutoAuth) {
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = `Token ${AutoAuth}`;
}

export default ({

  // Auth

  setAuth: (token) => {
    Cookies.set(COOKIES.TOKEN.name, token, { expires: COOKIES.TOKEN.expires });
    // eslint-disable-next-line dot-notation
    axios.defaults.headers.common['Authorization'] = `Token ${token}`;
  },

  deleteAuth: () => {
    Cookies.remove(COOKIES.TOKEN.name);
    // eslint-disable-next-line dot-notation
    delete axios.defaults.headers.common['Authorization'];
  },

  // User

  setUserProfile: (responce) => {
    const { user } = responce.data;
    localStorage.setItem(LOCAL.profile, JSON.stringify(user));
  },

  deleteUserProfile: () => {
    localStorage.removeItem(LOCAL.profile);
  },
});
