import request from '@/common/request';

export function getCategorieList() {
  return request({
    url: '/categories',
    method: 'get',
  });
}

export function createCategorie(data) {
  return request({
    url: '/categories',
    method: 'post',
    data,
  });
}

export function updateCategorie(id, data) {
  return request({
    url: `/categories/${id}`,
    method: 'put',
    data,
  });
}

export function deleteCategorie(id) {
  return request({
    url: `/categories/${id}`,
    method: 'delete',
  });
}
