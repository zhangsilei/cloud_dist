import request from '@/common/request';

export function register(data) {
  return request({
    url: '/users/0/register',
    method: 'post',
    data,
  });
}

export function login(data) {
  return request({
    url: '/users/0/login',
    method: 'post',
    data,
  });
}
