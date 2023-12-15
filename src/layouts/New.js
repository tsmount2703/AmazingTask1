import React, { useState } from "react";
import { Button, Layout, Modal, Checkbox, Form, Input, theme, Typography } from "antd";
import {

  UploadOutlined,
} from "@ant-design/icons";
import { Routes, Route } from 'react-router-dom'
import HomePage from "./HomePage";
import Index from "./Index";
import Dashboard from "./Dashboard";
import Department from "./Department";
import AllStaff from "./AllStaff";
import StaffContract from "./StaffContract";
import MyContract from "./MyContract";
import AddStaff from "./AddStaff";
import background from '../../src/assets/images/the-sky-shadows-legends-of-runeterra-league-of-legends-lol-wallpaper-2880x1800_8.jpg'

const { Header, Content } = Layout;
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


export default function New() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);

  };

  const handleOk = () => {
    setIsModalOpen(false);
    window.location.href = "/dashboard";
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      style={{
        // backgroundColor: 'black',
        backgroundImage: "url('https://a-static.besthdwallpaper.com/the-sky-shadows-legends-of-runeterra-league-of-legends-lol-wallpaper-2880x1800-74110_8.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100vw',
        width: '100vw',
        height: '100vh'
      }}
    >
      <div
        style={{
          position: '-webkit-sticky',
          position: 'sticky',
          // top: 0,
          //  backgroundColor:'black',
          // padding: '50px',
        }}
      >

        {/* <div
          style={{
            color: 'white',
            fontSize: '30px',
            marginTop: '0px',
            // margin:'100px 0px 0px 0px'
            display: 'inline-block'
          }}
        >
        <b
          style={{
            marginTop: '100px'
          }}
        >WELCOME TO MY WEBSITE</b>

        </div> */}
        <Button
          type="primary"
          ghost
          size="large"
          onClick={showModal}
          style={{
            float: 'right',
            margin: '20px 10px 0px 0px',
            // color:'white',
            fontWeight:'500',
            // fontSize:'19px'
            borderColor:''
          }}
        >Đăng Nhập
         
        </Button>
        {/* <img width={'1520px'} src={background} /> */}

      </div>
      <Modal
        title="Đăng Nhập"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{

        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}