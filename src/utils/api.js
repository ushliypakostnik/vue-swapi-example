import axios from 'axios';

import { API_URL } from '@/utils/constants';

export default ({

  // Auth

  postAuth: user =>
    axios.post(`${API_URL}/api/user/login`, { user }), // eslint-disable-line implicit-arrow-linebreak

  postVerifyEmail: usermail =>
    axios.post(`${API_URL}/api/user/send-verify-email`, { usermail }), // eslint-disable-line implicit-arrow-linebreak

  postRemindPassword: usermail =>
    axios.post(`${API_URL}/api/user/remind`, { usermail }), // eslint-disable-line implicit-arrow-linebreak

  postNewPassword: user =>
    axios.post(`${API_URL}/api/user/password`, { user }), // eslint-disable-line implicit-arrow-linebreak

  getLogout: () =>
    axios.get(`${API_URL}/api/user/logout`), // eslint-disable-line implicit-arrow-linebreak

  // User

  getUserProfile: () =>
    axios.get(`${API_URL}/api/user/profile`), // eslint-disable-line implicit-arrow-linebreak

  // Test

  getTest: () =>
    axios.get(`${API_URL}/test`), // eslint-disable-line implicit-arrow-linebreak
});
