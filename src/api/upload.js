import request from '@/common/request';

export function uploadVideos(data) {
  return request({
    url: '/videos',
    method: 'post',
    data,
  });
}
