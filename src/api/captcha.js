import request from '@/common/request';

export function createCaptcha() {
  return request({
    url: '/captcha',
    method: 'post',
  });
}
