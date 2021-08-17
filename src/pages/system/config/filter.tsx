/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-11 17:54:59
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-16 16:53:32
 */
import React, { FC } from 'react';
import { Form, Input, Select, Button, Space } from 'antd';
import { connect } from 'umi';
import { SearchOutlined } from '@ant-design/icons';
import { SystemModelState } from '@/models/connect';
import { SystemConfigProps } from './config';
import styled from 'styled-components';
const BaseLayout = styled.div`
margin-bottom: 10px;
`
const { Item } = Form;
const { Option } = Select;
const ListFilterRegion: FC<SystemConfigProps> = ({ dispatch, queryTable }) => {
    // const { searchContentVal, statusVal } = queryTable;
    // 查询
    const onSearch = (res: any) => {

    }
    const onSearchChange = () => {
        dispatch({
            type: 'system/queryConfigList',
            payload: {
                // ...form
            },
        });
    };

    return (
        <BaseLayout>
            <Space>
                <Form
                    layout='inline'
                    onFinish={onSearch}
                >
                    <Item name='content' label='内容'>
                        <Input
                            placeholder="请输入搜索内容"
                            style={{ width: 200 }}
                            suffix={<SearchOutlined />}
                        />
                    </Item>
                    <Item name='state' label='状态'>
                        <Select
                            style={{ width: 140 }}
                            allowClear
                        >
                            <Option value="">全部</Option>
                            <Option value="1">运行</Option>
                            <Option value="2">关闭</Option>
                            <Option value="3">试运行</Option>
                        </Select>
                    </Item>
                    <Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                        >
                            查询
                        </Button>
                    </Item>
                </Form>
            </Space>
        </BaseLayout>
    );
};

export default connect(({ queryTable }: { queryTable: SystemModelState }) => ({
    queryTable,
}))(ListFilterRegion);
