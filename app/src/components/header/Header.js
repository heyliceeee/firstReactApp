import React from 'react';
import './Header.css';
import { Col, Row, Typography, Space, Divider, Tag, Image, Button, Dropdown, message, Tooltip, Input, Select, Badge, Avatar } from 'antd';
import { DownOutlined, UserOutlined, LaptopOutlined, SearchOutlined, HeartOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;


const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const selectBefore = (
    <Select defaultValue="All Categories">
      <Option value="bags">Bags</Option>
      <Option value="laptop">Laptop</Option>
      <Option value="phoneCases">Phone Cases</Option>
    </Select>
  );

const Header = () => {
    return (
        <div>
            <Row justify="space-around">
                <Col span={22} align="middle">
                    <Text strong={true}> ‎ </Text>
                </Col>
            </Row>

            <Row justify="space-around">
                <Col span={1}>
                    <Image preview={false} width={33} src="https://assets-global.website-files.com/5fd0f5e4883524ed0fc88323/604a38b95b75d0fb380b301e_logo_default.svg" />
                </Col>

                <Col span={14}>
                    <Input addonBefore={selectBefore} placeholder="Search" addonAfter={<SearchOutlined />}/>
                </Col>

                <Col span={5}>
                <a href="#">
                    <Badge count={5}>
                    <Avatar shape="square" size="large" />
                    </Badge>
                </a>
                </Col>
            </Row>
        </div>
    )
}

export default Header;