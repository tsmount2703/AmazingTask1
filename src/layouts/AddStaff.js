import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, Form } from 'antd';
import {
    UserOutlined,
    EllipsisOutlined,
    UploadOutlined,
    UnorderedListOutlined,
    AlignLeftOutlined,
    BorderlessTableOutlined,
    CalendarOutlined,
    MoreOutlined,
} from '@ant-design/icons';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import Sider1 from '../components/Sider';
import Footer1 from '../components/Footer';
import { Link } from 'react-router-dom';


const steps = [
    {
        title: 'Tạo tài khoản',
        content: <FirstForm />,
    },
    {
        title: 'Thông tin cá nhân',
        content: <SecondForm />,
    },

];
const { Header, Content } = Layout;

export default function AddStaff() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    // const [mode, setMode] = useState('inline');
    const [theme1, setTheme1] = useState('light');
    // const changeMode = (value) => {
    //   setMode(value ? 'vertical' : 'inline');
    // };
    // const changeTheme = (value) => {
    //   setTheme1(value ? 'dark' : 'light');
    // };
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));



    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: 'white',
        // borderRadius: token.borderRadiusLG,
        // border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };

    return (
        <Layout hasSider >
            <Sider1 />
            <Layout
                className="site-layout"
                style={{
                    marginLeft: '320px',
                    bottom: 0,
                    // height: '140vh',
                    marginRight: '10px',
                    backgroundColor:'white'
                }}
            >
                <Header
                    style={{
                        marginLeft: '16px',
                        // padding: 0,
                        background: colorBgContainer,
                        marginRight: '14px',
                        border: '1px solid',
                        borderColor: '#dddddd',
                        borderRadius: '10px',
                    }}

                >
                    <h3 style={{ display: 'inline', float: 'left', margin: '0px 20px 0px 0px' }}>THÊM NHÂN VIÊN</h3>
                    <Link to="/dashboard">
                        <Button size='large'
                            style={{
                                padding: '5px',
                                margin: '13px 20px 0px 0px',
                                float: 'right',
                                border: '1px solid',
                                borderColor: '#dddddd',
                                borderRadius: '10px',
                            }}
                        >
                            <UploadOutlined
                                rotate={90}
                                style={{
                                    fontSize: '30px',
                                    color: '#1677ff',
                                }}
                            />
                        </Button>
                    </Link>
                </Header>


                <Content
                    theme={theme1}
                    style={{
                        margin: '10px 16px 50px',
                        overflow: 'initial',
                        backgroundColor: 'white',
                        padding: '20px 50px',
                        // minHeight:"100vh"
                        border: '1px solid',
                        borderColor: '#dddddd',
                        borderRadius: '10px',

                    }}
                >
                    <div
                        style={{
                            // padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            display: 'inline',
                            maxWidth: '100vw',
                        }}
                    >
                        <>
                            <Steps current={current} items={items} />
                            <div style={contentStyle}>{steps[current].content}</div>
                            <div
                                style={{
                                    marginTop: 24,
                                }}
                            >
                                {current < steps.length - 1 && (
                                    <Form

                                    >
                                        <Button type="primary"
                                            style={{
                                                float: 'right',
                                                marginRight: '20px'

                                            }}
                                            onClick={() => next()}>
                                            Next
                                        </Button>
                                    </Form>

                                )}

                                {current > 0 && (
                                    <Button

                                        style={{
                                            // margin: '0 10px',
                                            float: 'left',
                                            marginLeft: '20px',
                                        }}
                                        onClick={() => prev()}
                                    >
                                        Previous
                                    </Button>
                                )}

                                {current === steps.length - 1 && (
                                    <Button type="primary"
                                        style={{
                                            float: 'right',
                                            marginRight: '20px',
                                        }}
                                        onClick={() => message.success('Processing complete!')}>
                                        Done
                                    </Button>
                                )}

                            </div>
                        </>
                    </div>
                </Content>
                {/* <Footer1/> */}
            </Layout>
        </Layout>
    );

}