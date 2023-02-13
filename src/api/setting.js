import request from '@/common/request';

export function getSettingConfigs() {
  return request({
    url: '/system-configs',
    method: 'get',
  });
}

export function updateSettingConfigs(id, data) {
  return request({
    url: `/system-configs/${id}`,
    method: 'put',
    data,
  });
}
