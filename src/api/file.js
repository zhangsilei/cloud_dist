import { getToken } from '@/common/cookie';
import request from '@/common/request';

export function postVideo(file) {
  const formData = new FormData();
  formData.append('video', file.file);

  return request({
    url: `/videos`,
    method: 'post',
    headers: {
      'Content-type': 'multipart/form-data',
      token: getToken(),
    },
    data: formData,
    timeout: 60 * 5 * 1000,
  });
}

export function postPicture(file) {
  const formData = new FormData();
  formData.append('picture', file.file);

  return request({
    url: `/pictures`,
    method: 'post',
    headers: {
      'Content-type': 'multipart/form-data',
      token: getToken(),
    },
    data: formData,
  });
}
