import request from '@/utils/request'

// 查询设备类型管理列表
export function listType(query) {
  return request({
    url: '/manage/type/list',
    method: 'get',
    params: query
  })
}

// 查询设备类型管理详细
export function getType(id) {
  return request({
    url: '/manage/type/' + id,
    method: 'get'
  })
}

// 新增设备类型管理
export function addType(data) {
  return request({
    url: '/manage/type',
    method: 'post',
    data: data
  })
}

// 修改设备类型管理
export function updateType(data) {
  return request({
    url: '/manage/type',
    method: 'put',
    data: data
  })
}

// 删除设备类型管理
export function delType(id) {
  return request({
    url: '/manage/type/' + id,
    method: 'delete'
  })
}
