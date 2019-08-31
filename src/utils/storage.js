import axios from 'axios';
import Cookies from 'js-cookie';

import { COOKIES, LOCAL } from '@/utils/constants';

// Auto auth
export const AutoAuth = Cookies.get(COOKIES.TOKEN.name);
if (AutoAuth) {
  // eslint-disable-next-line dot-notation
  axios.defaults.headers.common['Authorization'] = `Token ${AutoAuth}`;
}

export default ({});
