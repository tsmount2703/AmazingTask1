import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Typography, Button, Dropdown } from 'antd';
import {
  TeamOutlined,
  HomeOutlined,
  FieldTimeOutlined,
  FileOutlined,
  BarChartOutlined,
  LeftCircleTwoTone,
  PlusCircleOutlined,
  SnippetsOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  DollarOutlined,
  UserAddOutlined,
  SolutionOutlined,
  FileDoneOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import './index.css';
import { DownOutlined } from '@ant-design/icons';
import Dashboard from './layouts/Dashboard';
import Index from './layouts/Index';
import { Link } from 'react-router-dom';
import Department from './layouts/Department';
import MenuItem from 'antd/es/menu/MenuItem';
import SubMenu from 'antd/es/menu/SubMenu';
import Item from 'antd/es/list/Item';
import AllStaff from './layouts/AllStaff';
// import Header from './components/Header';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Text } = Typography;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const { Header, Content, Footer, Sider } = Layout;
const items = [
  getItem(
    <Link to="/dashboard" >Dashboard</Link>,
    'Dashboard',
    <HomeOutlined />
  ),

  getItem('NHÂN VIÊN', 'sub1', <TeamOutlined />, [
    getItem(<Link to="/allstaff" >Phòng Ban</Link>
    ,'Phòng Ban', 
    <TeamOutlined />),
    getItem('Phòng Ban Của Tôi', '3', <TeamOutlined />),
    getItem(<Link to="/department" >Toàn Bộ Nhân Viên</Link>,
      'Toàn Bộ Nhân Viên',
      <TeamOutlined />),
    getItem('Tạo Nhân Viên Mới', '5', <UserAddOutlined />),
  ]),
  getItem('TĂNG CA', 'sub2', <FieldTimeOutlined />, [
    getItem('Đơn Tăng Ca Nhân Viên', '6', <SolutionOutlined />),
    getItem('Đơn Tăng Ca Của Tôi', '7', <SolutionOutlined />),
  ]),
  getItem('NGHỈ PHÉP', 'sub3', <FieldTimeOutlined />, [
    getItem('Đơn Nghỉ Phép Của Nhân Viên', '8', <SolutionOutlined />),
    getItem('Đơn Nghỉ Phép Của Tôi', '9', <SolutionOutlined />),
  ]),
  getItem('ĐƠN KHÁC', 'sub4', <FileOutlined />, [
    getItem('Danh Sách Đơn Khác', '10', <FileOutlined />),
    getItem('Đơn Khác Của Tôi', '11', <FileOutlined />),
  ]),

  getItem('QUẢN LÝ LƯƠNG', 'sub5', <BarChartOutlined />, [
    getItem('Lương Nhân Viên', '12', <DollarOutlined />),
    getItem('Lương Của Tôi', '13', <DollarOutlined />),
  ]),

  getItem('HỢP ĐỒNG', 'sub6', <SnippetsOutlined />, [
    getItem('Hợp Đồng Nhân Viên', '14', <FileDoneOutlined />),
    getItem('Hợp Đồng Của Tôi', '15', <FileDoneOutlined />),
  ]),

  getItem('TUYỂN DỤNG', 'sub7', <UsergroupAddOutlined />, [
    getItem('Danh Sách Ứng Viên', '16', <UsergroupAddOutlined />),

  ]),
]

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [mode, setMode] = useState('inline');
  const [theme1, setTheme1] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme1(value ? 'dark' : 'light');
  };

  return (
    <Layout hasSider>

      <Sider theme={theme1}
        width="260"
        style={{
          // overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          // left: 0,
          // top:0,
          // bottom: 0,
          marginRight: 10,
        }}
      >
        <Avatar style={{ marginTop: '20px', textAlign: 'center', }} shape="square" size="large" icon={<UserOutlined />} />

        <Text style={{
          fontSize: '13px',
          marginLeft: '10px',
          color: 'grey',
          fontFamily: 'sans-serif'
          // marginRight:'5px',
          // marginBottom:'200px',

        }}
        >NGUYEN VAN QUAN LY</Text>

        <br />
        <br />
        <div className="demo-logo-vertical" />
        <Switch onChange={changeMode} /> <Text
          style={{
            color: 'grey',
            fontSize: '100',

          }}
        ><>Change Mode</></Text>
        <Divider type="horizontal" />

        <Switch onChange={changeTheme} /> <Text
          style={{
            color: 'grey',
            fontSize: '100',

          }}
        ><>Change Style</></Text>
        <br />
        <br />

        <Menu
          style={{
            width: '260',
          }}
          theme={theme1} mode={mode} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
          items={items}
        >
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
          // bottom: 0,
          marginLeft: '250px',
          minHeight: '100vh',
        }}
      >
        <Header
          theme={theme1}
          style={{
            marginLeft:'16px',
            padding: 0,
            background: colorBgContainer,
          }}

        >

          <div>
            <Text type="secondary"
              style={{
                marginLeft: '16px',
                fontSize: '15px',
                
              }}
            ><b
            style={{
              display:'inline'
            }}
            >Danh Sách Nhân Viên</b></Text>
            <UploadOutlined
              rotate={90}
              style={{
                fontSize: '30px',
                padding: '5px',
                margin: '15px 20px 0 0',
                float: 'right',
                color: '#1677ff',
                border: '1px solid',
                borderColor: '#dddddd',
                
                borderRadius: '10px',
              }}
            />
          </div>

        </Header>

        <Content
          theme={theme1}
          style={{
            margin: '8px 8px 0 15px',
            // overflow: 'initial',
          }}
        >
          <div
            style={{
              // padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path='' element={<Index />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/department' element={<Department />} />
              <Route path='/allstaff' element={<AllStaff/>} />
            </Routes>
          </div>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          HRMIntern@2023
        </Footer>


      </Layout>
    </Layout>
  );
};
export default App;