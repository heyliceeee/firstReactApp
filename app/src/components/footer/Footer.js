import React from 'react';
import './Footer.css';
import { Col, Row, Typography, Space, Divider, Tag, Image } from 'antd';
import { EnvironmentFilled, MailFilled, PhoneFilled, InstagramOutlined, TwitterOutlined, RightOutlined, FacebookOutlined, YoutubeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = () => {
    return (
        <div>
            <Row justify="space-around">
                <Col span={5}>
                    <Title level={3}>Get in Touch</Title>

                    <Space direction="vertical">
                        <Text><EnvironmentFilled style={{ color: '#1677ff' }} /> 123 Your Store, Los Angeles, USA</Text>
                        <Text><MailFilled style={{ color: '#1677ff' }} /> email@example.com</Text>
                        <Text><PhoneFilled style={{ color: '#1677ff' }} /> +123-456-7890</Text>
                    </Space>
                </Col>

                <Col span={5}>
                    <Title level={3}>Company Info</Title>

                    <Space direction="vertical">
                        <Text><RightOutlined style={{ color: '#1677ff' }} /> About Us</Text>
                        <Text><RightOutlined style={{ color: '#1677ff' }} /> Privacy Policy</Text>
                        <Text><RightOutlined style={{ color: '#1677ff' }} /> Terms & Condition</Text>
                    </Space>
                </Col>

                <Col span={5}>
                    <Title level={3}>Purchase Info</Title>

                    <Space direction="vertical">
                        <Text><RightOutlined style={{ color: '#1677ff' }} /> Payment Policy</Text>
                        <Text><RightOutlined style={{ color: '#1677ff' }} /> Shipping Policy</Text>
                        <Text><RightOutlined style={{ color: '#1677ff' }} /> Return Policy</Text>
                    </Space>
                </Col>

                <Col span={5}>
                    <Title level={3}>Follow Us</Title>

                    <Row>
                        <Tag icon={<InstagramOutlined />} color="#C13584"> Instagram</Tag>
                        <Tag icon={<YoutubeOutlined />} color="#cd201f"> Youtube</Tag>
                        <Tag icon={<TwitterOutlined />} color="#55acee"> Twitter</Tag>
                        <Tag icon={<FacebookOutlined />} color="#3b5999"> Facebook</Tag>
                        {/* <Col style={{padding: "0px 0px 10px 0px"}} xs={20} sm={15} md={10} lg={5}>
                            <Button type="primary" icon={<InstagramFilled />}/>
                        </Col>

                        <Col style={{padding: "0px 0px 10px 0px"}} xs={20} sm={15} md={10} lg={5}>
                            <Button type="primary" icon={<YoutubeFilled />}/>
                        </Col>

                        <Col style={{padding: "0px 0px 10px 0px"}} xs={20} sm={15} md={10} lg={5}>
                            <Button type="primary" icon={<TwitterOutlined />}/>
                        </Col>

                        <Col style={{padding: "0px 0px 0px 0px"}} xs={20} sm={15} md={10} lg={5}>
                            <Button type="primary" icon={<FacebookFilled />}/>
                        </Col> */}
                    </Row>
                </Col>
            </Row>

            <Divider />

            <Row justify="space-around">
                <Col span={11} align="middle">
                    <Space direction="horizontal">
                        <Title level={4}>We Accept:</Title>
                        
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/2560px-Old_Visa_Logo.svg.png"/>
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"/>
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://1000logos.net/wp-content/uploads/2017/05/PayPal-Logo-2007.png"/>
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"/>
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://seeklogo.com/images/V/visa_electron_new-logo-050A090FFC-seeklogo.com.png"/>
                    </Space>
                </Col>

                <Col span={11} align="middle">
                    <Space direction="horizontal">
                        <Title level={4}>Secure By:</Title>
                        
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://now.symassets.com/content/dam/norton/global/images/non-product/logos/norton_logo.png"/>
                        <Image preview={false} width={30} style={{padding: "20px 0px 0px 0px"}} src="https://a.fsdn.com/allura/s/mcafee-sme-security/icon?1610999521?&w=128"/>
                    </Space>
                </Col>
            </Row>

            <Divider />

            <Row justify="space-around" style={{ backgroundColor: '#E8E8E8' }}>
                <Col span={22} align="middle">
                    <Text strong={true}> ‎ </Text>
                </Col>
            </Row>

            <Row justify="space-around" style={{ backgroundColor: '#E8E8E8' }}>
                <Col span={11} align="middle">
                    <Text strong={true}> Copyright © </Text><Text strong={true} style={{ color: '#1677ff' }}> Heyliceeee's Store</Text><Text strong={true}>. All Rights Reserved</Text>
                </Col>

                <Col span={11} align="middle">
                    <Text strong={true}> Template By </Text><Text strong={true} style={{ color: '#1677ff' }}>heyliceeee</Text>
                </Col>
            </Row>

            <Row justify="space-around" style={{ backgroundColor: '#E8E8E8' }}>
                <Col span={22} align="middle">
                    <Text strong={true}> ‎ </Text>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;