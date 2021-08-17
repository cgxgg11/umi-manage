/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-06 11:18:02
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-16 17:03:02
 */
export default [
    {
        path: '/',
        component: '@/layouts/index'
    },
    {
        path: '/login',
        component: '@/pages/login'
    }
]

export const menu =  [
    {
        title: '首页',
        path: '/dashboard',
        
        key: 'dashboard',
        icon: '',
        children: [],
    },

    {
        title: '系统管理',
        path: '/system',
        key: 'system',
        icon: '',
        children: [
            {
                title: '菜单管理',
                path: '/system/menu',
                key: 'menu',
                icon: '',
                children: [],
            },
            {
                title: '用户管理',
                path: '/system/user',
                key: 'user',
                icon: '',
                children: [],
            },
            {
                title: '角色管理',
                path: '/system/role',
                key: 'role',
                icon: '',
                children: [],
            },
            {
                title: '配置管理',
                path: '/system/config',
                key: 'config',
                icon: '',
                children: [],
            }
        ],
    },
    {
        title: '任务管理',
        path: '/task',
        key: 'task',
        icon: '',
        children: [] 
    }

]