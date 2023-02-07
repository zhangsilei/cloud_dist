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

export function getUserList(params) {
  return request({
    url: '/users',
    method: 'get',
    params,
  });
}

export function updateUser(userId, data) {
  return request({
    url: `/users/${userId}`,
    method: 'put',
    data,
  });
}
