/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-05 10:22:02
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-06 16:43:12
 */
import React from "react";
import { Redirect } from "umi";
import SimpleLayout from "./SimpleLayout";
import BaseLayout from "./BasicLayout";

export default function (props: any) {
    const isLogin = window.localStorage.userInfo;
    const { pathname } = props.location
    if (pathname === '/login') {
        return <SimpleLayout>{props.children}</SimpleLayout>
    }

    if (!isLogin && pathname !== '/login') {
        return <Redirect to={`login?timestamp=${new Date().getTime()}`} />
    }

    return <BaseLayout>{props.children}</BaseLayout>
}