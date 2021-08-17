/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-05 10:32:45
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-05 10:35:51
 */
import React, { Component } from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

export default class SimpleLayout extends Component {
    render() {
        return (
            <Layout>
                <Content>
                    {this.props.children}
                </Content>
            </Layout>
        )
    }
}
