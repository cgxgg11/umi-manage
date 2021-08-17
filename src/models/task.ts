/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-04 15:37:57
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 14:01:59
 */
import { Effect, Reducer } from 'umi';
import { queryConfigList } from '@/services/system/config'

interface TableListProps {
  [key: string]: any;
}

export interface QueryTableState {
  searchContentVal: string;
  statusVal: string;
  queryTableSource: TableListProps[];
}

export interface QueryTableType {
  namespace: 'task';
  state: QueryTableState;
  effects: {
    queryConfigList: Effect;
  };
  reducers: {
    save: Reducer<QueryTableState>;
    // 启用 immer 之后
    // save: ImmerReducer<QueryTableState>;
  };
}

const QueryTableModel: QueryTableType = {
  namespace: 'task',
  state: {
    searchContentVal: '',
    statusVal: '',
    queryTableSource: [],
  },
  effects: {
    *queryConfigList({payload},{call,put}){
      const response = yield call(queryConfigList, {...payload});
     console.log(response.ok);
     
      // if(response.ok) {
      //   const {mgr_user_list} = response;
      //   console.log(response,mgr_user_list);
      //    yield put({
      //       type: 'save',
      //       payload: {
      //           querySource: mgr_user_list,
      //           searchContentVal: '1',
      //           statusVal: '2',
      //       },
      //     });
      // } else {
      // }
  },
  },
  reducers: {
    save(state, action) {
      console.log(state,action,'2222');
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

export default QueryTableModel;
