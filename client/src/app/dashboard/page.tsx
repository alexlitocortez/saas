import React from 'react';
import { Flex, Col, Row, Layout } from 'antd';
import Widget from '../../components/widget';

export default function Dashboard() {
    return (
        <Flex gap='middle'>
            <Layout className='flex flex-col justify-center min-h-screen bg-black'>
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 18, push: 6 }}>
                        <Row className='flex justify-around mb-5'>
                            <Widget title='hi' bordered={true} width='80' />
                            <Widget title='hi' bordered={true} width='80' />
                        </Row>
                        <Row className='flex justify-around mb-5'>
                            <Widget title='bye' bordered={true} width='80' />
                            <Widget title='bye' bordered={true} width='80' />
                        </Row>
                        <Row className='flex justify-center'>
                            <Widget title='next' bordered={true} width="80" />
                        </Row>
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 6, pull: 18 }}>
                        <Widget title='next' bordered={true} width='80' />
                    </Col>
                </Row>
            </Layout>
        </Flex>
    )
}


