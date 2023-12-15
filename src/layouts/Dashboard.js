import React, { useState } from 'react';
import { useRef } from 'react';
import Highlighter from 'react-highlight-words';
import { Input, Space, Badge, Table, Layout, theme, Button, Avatar, Tag, Divider } from 'antd';
import { Result } from 'antd';
import {
    PlusCircleOutlined,
    EllipsisOutlined,
    UploadOutlined,
    UserOutlined,
    BorderlessTableOutlined,
    AlignLeftOutlined,
    PhoneOutlined,
    ArrowUpOutlined,
    SearchOutlined,
    MoreOutlined,
    UnorderedListOutlined,
    CalendarOutlined,
} from '@ant-design/icons';
import Sider1 from '../components/Sider';
import Footer1 from '../components/Footer';
import { Link } from 'react-router-dom';

{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script> */ }

const { Header, Content } = Layout;


export default function Dashboard() {
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

    return (
        <Layout hasSider>
            <Sider1 />
            <Layout
                className="site-layout"
                style={{
                    marginLeft: '320px',
                    bottom: 0,
                    height: '140vh',
                    backgroundColor: 'white',
                    // display: 'inline'
                    marginRight: '10px',

                }}
            >

                <Content
                    theme={theme1}
                    style={{
                        margin: '10px 16px 50px',
                        overflow: 'auto',
                        // backgroundColor:'white'
                    }}
                >
                    <Link to="/">
                        <Button
                            size='medium'
                            style={{
                                float: 'right',
                                borderColor: '#c30101',
                                color: '#c30101'
                            }}
                        >Đăng Xuất</Button>
                    </Link>




                    <div
                        style={{
                            // padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            display: 'inline',
                        }}
                    >
                        <Result
                            status="404"
                            title="404"
                            subTitle="Sorry, the page you visited does not exist."
                            extra={<Button type="primary">Back Home</Button>}
                        />

                    </div>
                </Content>
                <Footer1 />
            </Layout>
        </Layout>
    )
}