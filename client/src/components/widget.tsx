import React from 'react';
import { Card } from 'antd';

interface WidgetProps {
    title: string;
    width?: string;
    bordered: boolean;
}

const Widget: React.FC<WidgetProps> = ({ title, width, bordered }) => {
    const cardClassName = width ? `w-${width}` : '';

    return (
        <Card title={title} bordered={bordered} className={cardClassName}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    )
}

export default Widget;