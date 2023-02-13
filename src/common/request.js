import router from '@/router';
import axios from 'axios';
import { createDiscreteApi } from 'naive-ui';
import { getToken } from './cookie';
import { logout } from './global';

const { message } = createDiscreteApi(['message']);

// 创建axios实例
const request = axios.create({
  baseURL:
    location.hostname === 'localhost' ||
    location.hostname.indexOf('192.168') !== -1
      ? '/api/network-disk/v1'
      : '/network-disk/v1',
  timeout: 5000,
});

// request拦截器
request.interceptors.request.use(
  (config) => {
    config.headers['token'] = getToken();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// respone拦截器
request.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      message.error('服务器异常');
      return;
    }
    return response.data;
  },
  (error) => {
    if (error.response.status === 401) {
      logout();
    }
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default request;
