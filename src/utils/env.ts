/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-09 18:18:13
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-13 15:16:54
 */
// console.log(process.env);
const globalData = () => {
    const API_URL = 'http://192.168.0.204:50000';
    // console.log(process.env);
    
    return {
        API_URL
    }
};

export default globalData;
