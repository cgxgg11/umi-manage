/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-07-30 13:52:57
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-06 11:42:56
 */
import React from 'react';
import { Redirect } from 'umi';

export default () => (
  <Redirect
    to={{
      pathname: '/dashboard',
      state: {},
    }}
  />
);
