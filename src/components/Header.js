import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom'
import { Input, Layout, theme, Typography } from 'antd';
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
} from '@ant-design/icons';
// import { Divider, Menu, Switch } from 'antd';
// import './index.css';
// import { DownOutlined } from '@ant-design/icons';
// import Dashboard from './layouts/Dashboard';
// import Index from './layouts/Index';
// import { Link } from 'react-router-dom';
// import Department from './layouts/Department';
// import MenuItem from 'antd/es/menu/MenuItem';
// import SubMenu from 'antd/es/menu/SubMenu';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
// const { Search } = Input;
// const onSearch = (value) => console.log(value);
const { Text } = Typography;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// function getItem1(label, key) {
//   return {
//     label,
//     key,
//   };
// }

// const { Header,Content, Footer, Sider } = Layout;
// const pages = ['dashboard', 'department'];
// const items = [
//   getItem('Dashboard', '1', <HomeOutlined />),
//   getItem('NHÂN VIÊN', 'sub1', <TeamOutlined />, [
//     getItem('Phòng Ban', '2', <TeamOutlined />),
//     getItem('Phòng Ban Của Tôi', '3', <TeamOutlined />),
//     getItem('Toàn Bộ Nhân Viên', '4', <TeamOutlined />),
//     getItem('Tạo Nhân Viên Mới', '5', <UserAddOutlined />),
//   ]),
//   getItem('TĂNG CA', 'sub2', <FieldTimeOutlined />, [
//     getItem('Đơn Tăng Ca Nhân Viên', '6', <SolutionOutlined />),
//     getItem('Đơn Tăng Ca Của Tôi', '7', <SolutionOutlined />),
//   ]),
//   getItem('NGHỈ PHÉP', 'sub3', <FieldTimeOutlined />, [
//     getItem('Đơn Nghỉ Phép Của Nhân Viên', '8', <SolutionOutlined />),
//     getItem('Đơn Nghỉ Phép Của Tôi', '9', <SolutionOutlined />),
//   ]),
//   getItem('ĐƠN KHÁC', 'sub4', <FileOutlined />, [
//     getItem('Danh Sách Đơn Khác', '10', <FileOutlined />),
//     getItem('Đơn Khác Của Tôi', '11', <FileOutlined />),
//   ]),

//   getItem('QUẢN LÝ LƯƠNG', 'sub5', <BarChartOutlined />, [
//     getItem('Lương Nhân Viên', '12', <DollarOutlined />),
//     getItem('Lương Của Tôi', '13', <DollarOutlined />),
//   ]),

//   getItem('HỢP ĐỒNG', 'sub6', <SnippetsOutlined />, [
//     getItem('Hợp Đồng Nhân Viên', '14', <FileDoneOutlined />),
//     getItem('Hợp Đồng Của Tôi', '15', <FileDoneOutlined />),
//   ]),

//   getItem('TUYỂN DỤNG', 'sub7', <UsergroupAddOutlined />, [
//     getItem('Danh Sách Ứng Viên', '16', <UsergroupAddOutlined />),

//   ]),
// ];
export default function Header(){
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
    return(
        <Header
          theme={theme1}
          style={{
            padding: 0,
            background: colorBgContainer,
          }}

        >

          <div>
            <Text type="secondary"
              style={{
                marginLeft: '16px',
                marginRight: '1400px',
                fontSize: '15px',

              }}
            ><b>Danh Sách Nhân Viên</b></Text>
            <LeftCircleTwoTone
              style={{
                fontSize: '30px',

              }}
            />

          </div>


        </Header>
  
   )
  
  }
