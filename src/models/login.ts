/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-09 16:29:34
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 15:49:49
 */
import { Effect, Reducer, history } from 'umi';
import { message } from 'antd';
import { queryLogin, getSmscode } from '@/services/login';

import { ConnectState, LoginUserInfoState } from './connect.d';
export interface LoginModelState {
    userInfo: LoginUserInfoState;
    isError: boolean;
  }
  
  export interface LoginModelType {
    namespace: 'login';
    state: LoginModelState;
    effects: {
      getUserInfo: Effect;
      queryLogin: Effect;
      getSmscode: Effect;
    };
    reducers: {
      save: Reducer<LoginModelState>;
      // 启用 immer 之后
      // save: ImmerReducer<LoginModelState>;
    };
  }
  
  const LoginModel: LoginModelType = {
    namespace: 'login',
    state: {
      userInfo: {
        user_id: 0,
        iconurl: '',
        nickname: '',
        mobile: '',
      },
      isError: false,
    },
    effects: {
      *queryLogin({ payload }, { call, put }) {
        // const { name } = yield select((state: ConnectState) => state.global);
        const response = yield call(queryLogin, { ...payload });
        const {token} = response;
        // console.log(token);
        const user = {
          user_id: 1234,
          iconurl:'https://procdn1.chatgogo.cn/gogo/upload//avatar/1616554446000.png'
          ,nickname: '张大大1',
          mobile: '18141353327'
        };
        localStorage.userInfo = JSON.stringify(user);
          sessionStorage.setItem('Authorization',token )
          message.success('登录成功！');
          history.replace('/');
      },
      *getUserInfo({ payload }, { call, put, select }) {
        const { name } = yield select((state: ConnectState) => state.global);
        const data = yield call(queryLogin, { ...payload, name });
        yield put({
          type: 'save',
          payload: {
            userInfo: data,
          },
        });
      },
      *getSmscode(_, { call }) {
        // const response = yield call(getSmscode);
        // if (response.status === 'ok') {
          localStorage.removeItem('userInfo');
          localStorage.removeItem('Authorization');
          history.replace({
            pathname: '/login',
            search: `timestamp=${new Date().getTime()}`,
          });
        // }
      },
    },
    reducers: {
      save(state, action) {
        return {
          ...state,
          ...action.payload,
        };
      },
      // 启用 immer 之后
      // save(state, action) {
      //   state.name = action.payload;
      // },
    },
  };
  
  export default LoginModel;
