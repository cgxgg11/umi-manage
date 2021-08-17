/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-11 15:48:43
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 13:58:37
 */
import { Effect, Reducer } from 'umi';
import { queryConfigList,updateConfig } from '@/services/system/config'

import { message } from 'antd';
interface TableListProps {
    [key: string]: any;
  }
export interface SystemModelState {
    querySource: TableListProps[];
    searchContentVal: string;
    statusVal: string;
}
export interface SystemModelType {
    namespace: 'systemConfig';
    state: SystemModelState;
    effects: {
        queryConfigList: Effect;
        updateConfig: Effect;
    }
    reducers: {
        save: Reducer<SystemModelState>;
        // 启用 immer 之后
        // save: ImmerReducer<SystemModelState>;
    }
}

const SystemConfigModel: SystemModelType = {
    namespace: 'systemConfig',
    state:{
        searchContentVal: '',
        statusVal: '',
        querySource: [],
    },
    effects: {
        *queryConfigList({payload},{call,put}){
            const response = yield call(queryConfigList, {...payload});
            // console.log(response.ok);
            if (response.ok) {
                const {mgr_user_list} = response;
                 yield put({
                    type: 'save',
                    payload: {
                        querySource: mgr_user_list,
                        searchContentVal: '1',
                        statusVal: '2',
                    },
                  });
            } else {
                message.error('查询失败')
            }
        },
        *updateConfig({payload},{call,put}){
            const response = yield call(updateConfig, {...payload});
            console.log(response);
            if (!response) {
                message.error('更新失败！')
            }
            
            yield put({
                type: 'save',
                payload: {
                    querySource: response,
                    searchContentVal: '1',
                    statusVal: '2',
                },
              });
        }
    },
    reducers:{
        save(state,action) {
            console.log(state,action,'2222');
            return {
                ...state,
                ...action.payload,
            }
        },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
    }
    
}

export default SystemConfigModel;