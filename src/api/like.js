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

export function deleteLike(data) {
  return request({
    url: '/likes',
    method: 'delete',
    data,
  });
}
