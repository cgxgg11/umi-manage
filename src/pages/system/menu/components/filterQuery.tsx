/*
 * @Description  : 
 * @Author       : BuGua
 * @Date         : 2021-08-11 11:11:12
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 11:54:38
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Input, Button, Select } from 'antd';
const { Item } = Form;
const { Option } = Select;
const MainLayout = styled.div`
color: black;
`;
const FliterQuery = () => {
    const [form] = Form.useForm(); //
    const onFormLayoutChange = (value: any) => {
        console.log(value, form);

    };
    const menuType = [
        {
            label: '目录',
            type: 0
        },
        {
            label: '菜单',
            type: 1
        },
        {
            label: '权限',
            type: 3
        },
    ];
    return (
        <MainLayout>
            <Form
                layout='inline'
                form={form}
                initialValues={{ layout: 'inline' }}
                onFinish={onFormLayoutChange}
            >
                <Item label="菜单名称">
                    <Input placeholder="请输入菜单名称" />
                </Item>
                <Item label="类型">
                    <Select placeholder="请选择菜单类型">
                        {menuType.map(item => (<Option value={item.type} key={item.type}>{item.label}</Option>))}
                    </Select>
                </Item>
                <Item >
                    <Button type="primary" htmlType="submit">查询</Button>
                </Item>
            </Form>
        </MainLayout>
    )
}
export default FliterQuery;