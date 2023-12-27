"use client"

import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Col, Divider, Row } from 'antd';

const { Header, Content, Sider } = Layout;

// const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
//     key,
//     label: `nav ${key}`,
// }));

// const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//     (icon, index) => {
//         const key = String(index + 1);

//         return {
//             key: `sub${key}`,
//             icon: React.createElement(icon),
//             label: `subnav ${key}`,

//             children: new Array(4).fill(null).map((_, j) => {
//                 const subKey = index * 4 + j + 1;
//                 return {
//                     key: subKey,
//                     label: `option${subKey}`,
//                 };
//             }),
//         };
//     },
// );

const App: React.FC = () => {
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    // } = theme.useToken();

    return (
        <Layout>
            <Header className="bg-black">
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    // items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Layout className="bg-indigo-500">
                <Sider width={200}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    // items={items2}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                    // style={{
                    //     padding: 24,
                    //     margin: 0,
                    //     minHeight: 280,
                    //     background: colorBgContainer,
                    //     borderRadius: borderRadiusLG,
                    // }}
                    >
                        Content
                    </Content>
                    <Divider orientation="left">Responsive</Divider>
                    <Row>
                        <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
                            1 col-order-responsive
                        </Col>
                        <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
                            2 col-order-responsive
                        </Col>
                        <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
                            3 col-order-responsive
                        </Col>
                        <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
                            4 col-order-responsive
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default App;