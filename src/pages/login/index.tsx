/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-06 14:36:48
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 14:23:08
 */

import React, { FC } from 'react';
import { ConnectState } from '@/models/connect';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect, Dispatch } from 'umi';
import './index.less'
const { Item } = Form;
export interface LoginLayoutProps {
    dispatch: Dispatch,
    login: ConnectState;
    loading: boolean;
}

export interface SubmitValProps {
    user_name: Number;
    password: Number;
}
const LoginPage: FC<LoginLayoutProps> = ({ dispatch }) => {
    const onFinish = (values: SubmitValProps) => {
        console.log('Success:', values);
        const { user_name, password } = values;
        dispatch({
            type: 'login/queryLogin',
            payload: {
                user_name,
                password
            }
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='login-container'>
            <div className='login-weaper'>
                <div className='login-border'>
                    <div className='login-logo'></div>
                    <h1>VSPN-剧本杀</h1>
                    <div>
                        <Form
                            name="basic"
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                            initialValues={{ remember: false }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <Item
                                label="账号"
                                name="user_name"
                                rules={[{ required: true, message: '请输入账号' }]}
                            >
                                <Input />
                            </Item>

                            <Item
                                label="密码"
                                name="password"
                                rules={[{ required: true, message: '请输入密码' }]}
                            >
                                <Input.Password />
                            </Item>

                            <Item name="remember" valuePropName="checked" wrapperCol={{ offset: 4, span: 20 }}>
                                <Checkbox>记住密码?</Checkbox>
                            </Item>

                            <Item wrapperCol={{ offset: 4, span: 20 }}>
                                <Button type="primary" htmlType="submit" block>
                                    登录
                                </Button>
                            </Item>
                        </Form>
                    </div>
                </div>
            </div>
            {/* <img src={bgImg} alt="" /> */}
        </div>
    )
}
export default connect(({ login }: { login: ConnectState }) => ({ login }))(LoginPage);