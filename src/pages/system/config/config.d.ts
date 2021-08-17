/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-11 17:21:54
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 13:51:49
 */
import { Dispatch } from 'umi';
import { SystemModelState } from '@/models/connect';

export interface SystemConfigProps {
    dispatch: Dispatch;
    systemConfig: SystemModelState;
    loading?: boolean;
}