/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-11 15:41:53
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-16 11:02:28
 */
import request from '@/utils/request';

// query 查询列表  
// add  新增 
// del 删除
// edit 修改
// update 更新

// 查询配置
export async function queryConfigList(params: any) {
    // return request('/mgr/config/list',
    return request('/mgr/user/list',
      {
      method: 'get',
      params: params,
    });
  }

// 更新配置
export async function updateConfig(params: any) {
  return request('/mgr/config/update',
    {
    method: 'get',
    params: params,
  });
}
