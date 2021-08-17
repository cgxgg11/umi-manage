/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-09 16:01:25
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 14:00:22
 */
import { GlobalModelState } from './global';
import { LoginModelState } from './login';
import { SystemModelState } from './systemConfig';
import { QueryTableState } from './task';

export { GlobalModelState, LoginModelState,SystemModelState,QueryTableState };

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login: boolean;
    queryTable: boolean;
    dashboard: boolean;
  };
}

export interface ConnectState {
  global: GlobalModelState;
  login: LoginModelState;
  loading: Loading;
}

export interface Route {
  routes?: Route[];
}
export interface MenusDate {
  title: string;
  path: string;
  key: string;
  icon: string;
  children: any;
}
export interface LoginUserInfoState {
  user_id: Number,
  iconurl:string,
  nickname: string,
  mobile: string,
  role?: string;
  [key: string]: any;
}
