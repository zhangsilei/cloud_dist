import request from '@/common/request';

export function postLike(data) {
  return request({
    url: '/likes',
    method: 'post',
    data,
  });
}

export function getLikeList(params) {
  return request({
    url: '/likes',
    method: 'get',
    params,
  });
}

export function deleteLike(params) {
  return request({
    url: '/likes',
    method: 'delete',
    params,
  });
}
