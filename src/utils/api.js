import axios from 'axios';

import { API_URL } from '@/utils/constants';

export default ({

  // Starships

  getStarships: () =>
    axios.get(`${API_URL}`), // eslint-disable-line implicit-arrow-linebreak

  getStarship: id =>
    axios.get(`${API_URL}${id}/`), // eslint-disable-line implicit-arrow-linebreak
});
