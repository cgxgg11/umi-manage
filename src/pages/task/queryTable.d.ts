/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-17 11:00:36
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 13:59:30
 */
import { Dispatch } from 'umi';
import { QueryTableState } from '@/models/connect';

export interface QueryTableProps {
  dispatch: Dispatch;
  task: QueryTableState;
  loading?: boolean;
}
