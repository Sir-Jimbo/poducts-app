import axios from 'axios';

export function AxiosToken() {
  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };
  return token;
}

export function BaseURL() {
  return (axios.defaults.baseURL = 'http://dummy-api.d0.acom.cloud');
}
