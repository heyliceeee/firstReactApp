import './Header.css';
import { Col, Row, Typography, Image, Input, Select, Badge, Space, Avatar, Dropdown, Divider } from 'antd';
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Title, Text } = Typography;
const { Option } = Select;

const selectBefore = (
    <Select defaultValue="All Categories">
      <Option value="bags">Bags</Option>
      <Option value="laptop">Laptop</Option>
      <Option value="phoneCases">Phone Cases</Option>
    </Select>
);

const items = [
    {
      key: '1',
      label: (<a target="_blank" rel="noopener noreferrer" href="#">Create account</a>)
    },
    {
      key: '2',
      label: (<a target="_blank" rel="noopener noreferrer" href="#">Sign In</a>)
    },
    {
        key: '3',
        label: (<a target="_blank" rel="noopener noreferrer" href="#">Settings</a>),
        disabled: true
      },
    {
      key: '4',
      label: (<a target="_blank" rel="noopener noreferrer" href="#">Sign Out</a>),
      danger: true,
      disabled: true
    },
];

const Header = () => {
    const [show, setShow] = useState(true);

    const onChange = (checked) => {
        setShow(checked);
    };

    return (
        <div>
            <Row justify="space-around">
                <Col span={22} align="middle">
                    <Text strong={true}> ‎ </Text>
                </Col>
            </Row>

            <Row justify="space-around">
                <Col span={5}>
                    <Title level={5}>HEYLICEEEE'S STORE</Title>
                </Col>


                <Col span={13}>
                    <Input addonBefore={selectBefore} placeholder="Search Product" addonAfter={<SearchOutlined />}/>
                </Col>

                <Divider type="vertical" />

                <Col span={2} align="end">
                    <Space direction="horizontal">
                        <a href="#">
                            <Badge dot={show}><HeartOutlined style={{fontSize: 20, verticalAlign: 'middle',}}/></Badge>
                        </a>

                        <a href="#">
                            <Badge dot={show}><ShoppingCartOutlined style={{fontSize: 20, verticalAlign: 'middle',}}/></Badge>
                        </a>

                        <Divider type="vertical" />

                        <Dropdown placement="topRight" menu={{items,}}>
                            <Avatar size="default" icon={<UserOutlined />} />
                        </Dropdown>
                    </Space>
                </Col>
            </Row>
        </div>
    )
}

export default Header;