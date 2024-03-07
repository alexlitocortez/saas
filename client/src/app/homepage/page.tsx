"use client"

import React from 'react';
import { Layout, Flex, Button, Col, Row } from 'antd';
const { Header, Sider, Content } = Layout;
import Footer from '../../components/footer';
// import Widget from '../../components/widget';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'pink',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

export default function homepage() {
    return (
        <Flex gap="middle" wrap="wrap">
            <Layout className='flex flex-col justify-between min-h-screen'>
                <Header>Header</Header>
                <Content>
                    <Row className='text-white text-center bg-black'>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                        <Col span={8}>col-8</Col>
                    </Row>
                    <Row className='text-white text-center bg-red-400'>
                        <Col span={24}>col-24</Col>
                    </Row>
                    <Row className='bg-red-100 flex justify-center'>
                        <Button type='primary' className='text-black bg-blue-500 px-4 rounded'>Get Started</Button>
                        <Button type='primary' className='text-black bg-blue-500 px-4 rounded'>Live Demo</Button>
                    </Row>
                </Content>
                <Footer />
            </Layout>
        </Flex>
    )
}

