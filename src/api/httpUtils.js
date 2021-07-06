import request from '@/utils/request-f';

export function httpGet(url, query) {
  return request({
    url: url,
    method: 'get',
    params: query
  });
}

export function httpPost(url, data) {
  return request({
    url: url,
    method: 'post',
    data
  });
}

export function httpPut(url, query) {
  return request({
    url: url,
    method: 'put',
    params: query
  });
}

export function httpDel(url, query) {
  return request({
    url: url,
    method: 'delete',
    params: query
  });
}
