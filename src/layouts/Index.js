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
// import MenuItem from 'antd/es/menu/MenuItem';
// import SubMenu from 'antd/es/menu/SubMenu';
// import Item from 'antd/es/list/Item';

import Sider1 from '../components/Sider';
import Content1 from '../components/Content';
import Footer1 from '../components/Footer';

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
    getItem('Phòng Ban Của Tôi', '3', <TeamOutlined />),
    getItem(<Link to="/allstaff" >Toàn Bộ Nhân Viên</Link>,
      '4',
      <TeamOutlined />),
    getItem(
      <Link to="/addstaff" >Tạo Nhân Viên Mới</Link>,
      '5',
      <UserAddOutlined />),
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
    getItem(
      <Link to="/staffcontract"> Hợp Đồng Nhân Viên</Link>
      , '14', <FileDoneOutlined />),
    getItem(
      <Link to="/mycontract"> Hợp Đồng Của Tôi</Link>,
      '15',
      <FileDoneOutlined />),
  ]),

  getItem('TUYỂN DỤNG', 'sub7', <UsergroupAddOutlined />, [
    getItem('Danh Sách Ứng Viên', '16', <UsergroupAddOutlined />),

  ]),
]
export default function Index() {
   
    
      return (
        <Layout hasSider
          style={{
            display: 'flex'
          }}
        >
          <Sider1/>
          <Layout
            className="site-layout"
            style={{
              marginLeft: '250px',
    
            }}
          >
            <Content1 />
            <Footer1/>
          </Layout>
        </Layout>
      );
}