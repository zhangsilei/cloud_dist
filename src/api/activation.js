import request from '@/common/request';

export function getActivationCodeList(params) {
  return request({
    url: '/activation-codes',
    method: 'get',
    params,
  });
}

export function createActivationCode(data) {
  return request({
    url: '/activation-codes',
    method: 'post',
    data,
  });
}

export function useActivationCode(code) {
  return request({
    url: `/activation-codes/${code}`,
    method: 'put',
  });
}
