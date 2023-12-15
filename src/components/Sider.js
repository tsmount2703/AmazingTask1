import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Input, Space, Avatar, Layout, theme, Typography, Divider } from 'antd';
import {
    TeamOutlined,
    HomeOutlined,
    FieldTimeOutlined,
    FileOutlined,
    BarChartOutlined,
    SnippetsOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    DollarOutlined,
    UserAddOutlined,
    SolutionOutlined,
    FileDoneOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import { Menu, Switch } from 'antd';
// import './index.css';
// import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Dashboard from '../layouts/Dashboard';
import AllStaff from '../layouts/AllStaff';
import Index from '../layouts/Index';
import Department from '../layouts/Department';
import StaffContract from '../layouts/StaffContract';
import MyContract from '../layouts/MyContract';
import AddStaff from '../layouts/AddStaff';

// import MenuItem from 'antd/es/menu/MenuItem';
// import SubMenu from 'antd/es/menu/SubMenu';
// import Item from 'antd/es/list/Item';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
// const { Search } = Input;
const onSearch = (value) => console.log(value);
// const { Text } = Typography;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const { Header, Content, Sider } = Layout;
const items = [
    getItem(
        <Link to="/dashboard" >Dashboard</Link>,
        '1',
        <HomeOutlined />
    ),

    getItem('NHÂN VIÊN', 'sub1', <TeamOutlined />, [
        getItem(<Link to="/department" >Phòng Ban</Link>
            , '2',
            <TeamOutlined />),
        getItem(<Link to="/mydepartment" >Phòng Ban Của Tôi</Link>,
             '3', 
             <TeamOutlined />),
        getItem(<Link to="/allstaff" >Toàn Bộ Nhân Viên</Link>,
            '4',
            <TeamOutlined />),
        getItem(
            <Link to="/addstaff" >Tạo Nhân Viên Mới</Link>,
            '5',
            <UserAddOutlined />),
    ]),
    getItem('TĂNG CA', 'sub2', <FieldTimeOutlined />, [
        getItem(<Link to="/staffovertime" >Đơn Tăng Ca Nhân Viên</Link>,
        '6', 
        <SolutionOutlined />),
        getItem(<Link to="/myovertime" >Đơn Tăng Ca Của Tôi</Link>,
        '7', 
        <SolutionOutlined />),
    ]),
    getItem('NGHỈ PHÉP', 'sub3', <FieldTimeOutlined />, [
        getItem(<Link to="/staffapplication" >Đơn Nghỉ Phép Của Nhân Viên</Link>,
        '8', 
        <SolutionOutlined />),
        getItem(<Link to="/myapplication" >Đơn Nghỉ Phép Của Tôi</Link>,
        '9', 
        <SolutionOutlined />),
    ]),
    getItem('ĐƠN KHÁC', 'sub4', <FileOutlined />, [
        getItem(<Link to="/anotherapplication" >Danh Sách Đơn Khác</Link>,
        '10', 
        <FileOutlined />),
        getItem(<Link to="/myanotherapplication" >Đơn Khác Của Tôi</Link>,
        '11', 
        <FileOutlined />),
    ]),

    getItem('QUẢN LÝ LƯƠNG', 'sub5', <BarChartOutlined />, [
        getItem(<Link to="/staffsalary" >Lương Nhân Viên</Link>,
        '12', 
        <DollarOutlined />),
        getItem(<Link to="/mysalary" >Lương Của Tôi</Link>,
        '13',
         <DollarOutlined />),
    ]),

    getItem('HỢP ĐỒNG', 'sub6', <SnippetsOutlined />, [
        getItem(
            <Link to="/staffcontract"> Hợp Đồng Nhân Viên</Link>
            , '14', <FileDoneOutlined />),
        getItem(
            <Link to="/mycontract"> Hợp Đồng Của Tôi</Link>,
            '15',
            <FileDoneOutlined />),
    ]),

    getItem('TUYỂN DỤNG', 'sub7', <UsergroupAddOutlined />, [
        getItem(<Link to="/candidateslist" >Danh Sách Ứng Viên</Link>,
        '16', 
        <UsergroupAddOutlined />),

    ]),
]

export default function Sider1() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [mode, setMode] = useState('inline');
    const [theme1, setTheme1] = useState('light');

    const [selectedKeys, setSelectedKeys] = useState([]);
    useEffect(() => {
        const selectedMenu = sessionStorage.getItem('selectedMenu');
        if (selectedMenu) {
            setSelectedKeys([selectedMenu]);
        }
    }, []
    );
    const handleMenuSelect = (item) => {
        setSelectedKeys([item.key]);
        sessionStorage.setItem('selectedMenu', item.key);
    };
    return (
        <Sider theme={theme1}
            width="320"
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                // left: 0,
                // top:0,
                // bottom: 0,
                // marginRight: 10,

            }}
        >
            <Space size={12} wrap>
                <Avatar shape="square" size="large" icon={<UserOutlined />} />
                <h3>Nguyen Van Quan Ly</h3>
            </Space>
            <Divider type="horizontal" style={{ color: '#dddddd' }} />
            {/* <br />
        <br /> */}
            <div className="demo-logo-vertical" />

            {/* <Space size={1} >
          <Switch onChange={changeMode} />
          <h3
            style={{
              // color: 'grey',
              // fontSize: 'px',
              marginLeft: '1px',
            }}
          ><>Change Mode</></h3>
        </Space>

        <Space size={1}>
          <Switch onChange={changeTheme} /> <h3
            style={{
              // color: 'grey',
              // fontSize: '100',
              marginLeft: '1px',
            }}
          ><>Change Style</></h3>
        </Space>
        <br />
        <br /> */}
            <Menu
                style={{
                    width: '260',
                }}
                theme={theme1} mode={mode} selectedKeys={selectedKeys}
                onSelect={handleMenuSelect}
                defaultOpenKeys={['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6', 'sub7']}
                items={items}
            >
            </Menu>
            {/* <Routes>

                <Route path='' element={<Index/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/department' element={<Department/>} />
                <Route path='/allstaff' element={<AllStaff/>} />
                <Route path='/staffcontract' element={<StaffContract/>} />
                <Route path='/mycontract' element={<MyContract/>} />
                <Route path='/addstaff' element={<AddStaff/>} />

            </Routes> */}
        </Sider>



    )
}