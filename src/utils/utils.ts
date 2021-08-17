/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-06 17:36:06
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 17:52:36
 */
 export const queryKeysByPath = (
    pathname: string,
  ): { openKey: string; selectKey: string } => {
    const reg = /(^\/*)|(\/*$)/g; // 匹配字符串首尾斜杠
    const path = pathname.replace(reg, '');
    const routes = path.split('/');
    // console.log(routes);
    
    return { openKey: routes[0]|| '/', selectKey: (routes[1] || routes[0]) || '/' };
  };