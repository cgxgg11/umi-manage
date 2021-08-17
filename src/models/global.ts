/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-09 16:35:32
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-16 15:48:55
 */
import { Effect, Reducer, Subscription } from 'umi';
import { getUserInfo } from '@/services/login';
import {menu} from '@/router';
import { MenusDate, LoginUserInfoState } from './connect.d';

export interface GlobalModelState {
  name: string;
  menusData: MenusDate[];
  userInfo: LoginUserInfoState;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    getUserInfo: Effect;
  };
  reducers: {
    save: Reducer<GlobalModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    name: '',
    menusData: menu,
    userInfo: {
      user_id: 0,
      iconurl: '',
      nickname: '',
      mobile: '',
    },
  },
  effects: {
    *getUserInfo({ payload }, { call, put }) {
      const user = JSON.parse(localStorage.getItem('userInfo') || '');
      // const {mobile} = user;
      
      // const response = yield call(getUserInfo, { ...payload });

      // // if (response.status === 'ok') {
      //   yield put({
      //     type: 'save',
      //     payload: {
      //       userInfo: user,
      //     },
      //   });
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
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const reg = /^\/login/g;
        if (!reg.test(pathname)) {
          dispatch({
            type: 'getUserInfo',
            payload: {},
          });
        }
      });
    },
  },
};

export default GlobalModel;
