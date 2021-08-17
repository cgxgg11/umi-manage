/*
 * @Description  :
 * @Author       : BuGua
 * @Date         : 2021-08-04 14:42:36
 * @LastEditors  : BuGua
 * @LastEditTime : 2021-08-11 17:52:19
 */
// import React from 'react';
import React from 'react';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'umi';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import './index.less'
import { menu } from '@/router'
import { queryKeysByPath } from '@/utils/utils';
import HeaderContent from './header'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;
export default (props: any) => {
    // const [selectKeys, setSelectKeys] = useState('/dashboard')
    const { openKey, selectKey } = queryKeysByPath(location.pathname);
    // setSelectKeys(selectKey);
    //解析路由
    const renderMenu = (data: any = []) => {
        const rows = Array.isArray(data) ? data : [];
        return rows.map(row => {
            if (row === undefined) return false;
            const { title, path = '', key, children, ...restState } = row;
            if (children && children.length > 0) {
                const subMenu = renderMenu(children);
                return (
                    <SubMenu key={key} title={<span>{title}</span>}>
                        {subMenu}
                    </SubMenu>
                );
            }
            return (
                <Item key={key} title={title}>
                    <Link to={{ pathname: path, state: { ...restState, key } }}>
                        <span>{title}</span>
                    </Link>
                </Item>
            );
        });
    }

    // 路由跳转e
    const handleClick = (value: any) => {
        console.log(value.item.props);
        console.log(value.item.props.title);

        // setSelectKeys(value.key)
    }
    return (
        <div >
            <Layout>
                <Sider
                    className='sider'
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className='logo-item'>
                        <div className="logo" />
                        <div className='title'>剧本杀</div>
                    </div>
                    <Menu theme="dark" mode="inline" selectedKeys={[selectKey]}
                        defaultOpenKeys={[openKey]}
                        onClick={handleClick}>
                        {renderMenu(menu)}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="content-header">
                        <HeaderContent />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>vspn</Footer>
                </Layout>
            </Layout>
        </div>
    );
};
