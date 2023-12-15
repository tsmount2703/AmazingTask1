import React, { useState, useEffect } from 'react';
import { Input, Space, Avatar, Layout, theme, Typography, Divider } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
export default function Footer1() {

    return (
        <Footer
        style={{
          textAlign: 'center',
          marginTop:'100px',
          backgroundColor:"white"
         
        }}
      >
        HRMIntern@2023
      </Footer>

    )
}