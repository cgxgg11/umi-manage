/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-07-30 13:52:57
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-17 10:47:31
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
}

interface Window {
  ga: string;
}
