import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: 'https://grad-beetroot.deta.dev/'
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.headers['X-API-KEY'] = `53qjWXeQ.RynyTkqSZrXLfsAX8bXWnm-7QGCKnHF8v`;
  return config
})

export default $api;