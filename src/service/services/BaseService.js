import axios from '../axios';
import API from '../api';

export default class BaseService {
  constructor() {
    this.API = API;
  }

  async post(url, data = {}) {
    const result = await axios.post(url, data);
    return result.data;
  }
}
