/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-09 11:11:10
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 11:03:49
 */
import React, { FC } from 'react';
import { Dropdown, Menu, Tag } from 'antd';
import {
    SettingOutlined,
    LogoutOutlined,
    DownOutlined,
} from '@ant-design/icons';
import avatar from '@/assets/logo.png'
import styled from "styled-components";
import { history } from 'umi';
import { connect, Dispatch } from 'umi';
import { ClickParam } from 'antd/es/menu';
import { LoginModelState, GlobalModelState } from '@/models/connect';
export interface HeaderLayoutProps {
    dispatch: Dispatch;
    global: GlobalModelState
}
const DropLayout = styled.div`
text-align:right;
padding-right: 20px;
`
const { Item } = Menu;

// const userInfo = JSON.parse(window.localStorage.userInfo)
const HeaderContent: FC<HeaderLayoutProps> = ({ global, dispatch }) => {
    const handleSubmit = (event: ClickParam) => {
        // console.log(event);
        const { key } = event;
        if (key === 'logout') {
            dispatch({
                type: 'login/getSmscode',
            });
        }
    };
    const { userInfo } = global;
    // console.log(userInfo, 'global');
    const menu = (
        <Menu onClick={handleSubmit}>
            <Item key="personal" >
                <SettingOutlined />
                个人中心
            </Item>
            <Item key="logout" >
                {/* <Link to={{ pathname: '/login', }}> */}
                <LogoutOutlined />
                <span>退出登录</span>
                {/* </Link> */}
            </Item>
        </Menu>
    );
    return (
        <DropLayout>
            <span style={{ marginRight: '5px' }}>欢迎您</span><Tag color="blue">{userInfo.nickname}</Tag>
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <img src={userInfo.iconurl ? userInfo.iconurl : avatar} className='avatar' alt="" />
                    <DownOutlined />
                </a>
            </Dropdown>
        </DropLayout >
    );
}
export default connect(
    ({
        login,
        global,
    }: {
        login: LoginModelState;
        global: GlobalModelState;
    }) => ({ login, global }),
)(HeaderContent);
