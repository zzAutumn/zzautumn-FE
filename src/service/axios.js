import axios from 'axios';
import qs from 'qs';

const transformRequest = data => qs.stringify(data);

const instance = axios.create({
  transformRequest: [transformRequest],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default instance;
