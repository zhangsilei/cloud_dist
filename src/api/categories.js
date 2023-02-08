import request from '@/common/request';

export function getCategories() {
  return request({
    url: '/categories',
    method: 'get',
  });
}

export function addCategories(data) {
  return request({
    url: '/categories',
    method: 'post',
    data,
  });
}

export function updateCategories(id) {
  return request({
    url: `/categories/${id}`,
    method: 'put',
    data,
  });
}

export function deleteCategories(id) {
  return request({
    url: `/categories/${id}`,
    method: 'delete',
  });
}
