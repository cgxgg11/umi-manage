/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-09 16:21:13
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 15:22:20
 */
import request from '@/utils/request';
import globalData from '@/utils/env';

const {API_URL} = globalData();
// 定义model
export interface LoginParamsType {
  user_name: Number,
  password: Number,
}

export interface smsParamsType {
    uuid: String,
    timestamp: Number,
    sign: String,
}
// 登录
export async function queryLogin(params: LoginParamsType) {
    return request('/mgr/user/login',
      {
      method: 'post',
      data: params,
    });
  }
  // 获取用户信息
export async function getUserInfo(query:any) {
  return request( '/mgr/user-info',
    {
    method: 'get',
    params: query,
  });
}
  // 发送验证码
  export async function getSmscode(params: smsParamsType) {
    return request( '/v2/common/sms-code',
      {
      method: 'post',
      data: params,
    });
  }

