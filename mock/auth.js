/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-04 14:44:25
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-04 14:44:25
 */
const menu = [
    {
      id: 1,
      name: '概览',
      icon: 'dashboard',
      url: '/dashboard',
    },
    {
      id: 2,
      name: '系统管理',
      icon: 'setting',
      url: '/system',
      children: [
        {
          id: 21,
          name: '用户管理',
          icon: 'user',
          url: '/system/user',
        }
      ]
    },
  ];