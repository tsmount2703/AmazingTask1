
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
import Department from '../layouts/Department';
import StaffContract from '../layouts/StaffContract';
import MyContract from '../layouts/MyContract';
import AddStaff from '../layouts/AddStaff';
import New from '../layouts/New';
import Index from '../layouts/Index';
import HomePage from '../layouts/HomePage';
// import MenuItem from 'antd/es/menu/MenuItem';
// import SubMenu from 'antd/es/menu/SubMenu';
// import Item from 'antd/es/list/Item';
// import Header from './components/Header';
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
export default function Content1() {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
      const [mode, setMode] = useState('inline');
      const [theme1, setTheme1] = useState('light');
    return (
        <Content
        theme={theme1}
        style={{
          margin: '8px 8px 0 90px',
          overflow: 'initial',
          height: '100vh'
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

            <Route path='' element={<New/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/department' element={<Department/>} />
            <Route path='/allstaff' element={<AllStaff/>} />
            <Route path='/staffcontract' element={<StaffContract />} />
            <Route path='/mycontract' element={<MyContract />} />
            <Route path='/addstaff' element={<AddStaff />} />

          </Routes>
        </div>

      </Content>
    )
}