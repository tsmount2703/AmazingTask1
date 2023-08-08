import React, { useState } from 'react';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Typography, Button, Dropdown } from 'antd';
import {
  PlusCircleOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
// import './index.css';
import { DownOutlined } from '@ant-design/icons';
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


const columns = [
  {
    title: '',
    dataIndex: 'dot',
    width: '5%',
  },

  {
    title: 'ID',
    dataIndex: 'id',
    filters: [
      {
        text: '1',
        value: '1',
      },
      {
        text: '2',
        value: '2',
      },

      {
        text: '3',
        value: '3',
      },

      {
        text: '4',
        value: '4',
      },
    ],
    onFilter: (value, record) => record.id.startsWith(value),
    filterSearch: true,
    width: '5%',
  },

  {
    title: 'Tên phòng ban',
    key: 'departments',
    dataIndex: 'departments',
    filters: [
      {
        text: 'Sales',
        value: 'Sales',
      },
      {
        text: 'Marketing',
        value: 'Marketing',
      },

      {
        text: 'Finance',
        value: 'Finance',
      },

      {
        text: 'Human Resource',
        value: 'Human Resource',
      },

      {
        text: 'Operations',
        value: 'Operations',
      },

      {
        text: 'Engineering',
        value: 'Engineering',
      },

      {
        text: 'Customer Support',
        value: 'Customer Support',
      },

      {
        text: 'Research & Development',
        value: 'Research & Development',
      },

      {
        text: 'Quality Assurance',
        value: 'Quality Assurance',
      },

      {
        text: 'Design',
        value: 'Design',
      },

      {
        text: 'Chăm sóc khách hàng',
        value: 'Chăm sóc khách hàng',
      },

    ],
    onFilter: (value, record) => record.departments.startsWith(value),
    filterSearch: true,
    width: '12%',
    render: (department) => {
      let color = 'cyan';

      if (department === 'Sales') {
        color = 'orange';
      }
      if (department === 'Marketing') {
        color = 'lime';
      }
      if (department === 'Finance') {
        color = 'purple';
      }
      if (department === 'Human Resource') {
        color = 'red';
      }
      if (department === 'Operations') {
        color = 'yellow';
      }
      if (department === 'Engineering') {
        color = '	#2E8B57';
      }
      if (department === 'Customer Support') {
        color = '	#BA55D3';
      }
      if (department === 'Research & Development') {
        color = 'pink';
      }
      if (department === 'Quality Assurance') {
        color = 'green';
      }
      if (department === 'Design') {
        color = '#A52A2A';
      }
      if (department === 'Chăm sóc khách hàng') {
        color = '#4B0082';
      }

      return (
        <Badge color={color} text={<u>{department}</u>} />
      );


    },
  },

  {
    title: 'Quản lý',
    dataIndex: 'manager',
    filters: [
      {
        text: 'test1',
        value: 'test1',
      },
      {
        text: 'staff',
        value: 'staff',
      },
      {
        text: 'manager',
        value: 'manager',
      },
    ],
    onFilter: (value, record) => record.manager.startsWith(value),
    filterSearch: true,
    width: '10%',
  },


  {
    title: 'Số Nhân Viên',
    dataIndex: 'nos',
    filters: [
      {
        text: 'test1',
        value: 'test1',
      },
      {
        text: 'staff',
        value: 'staff',
      },
      {
        text: 'manager',
        value: 'manager',
      },
    ],
    onFilter: (value, record) => record.nos.startsWith(value),
    filterSearch: true,
    width: '10%',
  },

  {
    title: 'Email quản lý',
    dataIndex: 'eofm',
    filters: [
      {
        text: 'test1',
        value: 'test1',
      },
      {
        text: 'staff',
        value: 'staff',
      },
      {
        text: 'manager',
        value: 'manager',
      },
    ],
    onFilter: (value, record) => record.eofm.startsWith(value),
    filterSearch: true,
    width: '10%',
  },

  {
    title: 'Số điện thoại',
    dataIndex: 'phone',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.phone.startsWith(value),
    filterSearch: true,
    width: '10%',
  },


];
const data = [
  {
    key: '1',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '1',
    departments: 'Sales',
    manager: 'Nguyen Van Quan Ly',
    nos: '3',
    eofm: 'hrstaff@test.com',
    phone: 'string'
  },

  {
    key: '2',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '2',
    departments: 'Marketing',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '3',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '3',
    departments: 'Finance',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '4',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '4',
    departments: 'Human Resource',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '5',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '5',
    departments: 'Operations',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '6',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '6',
    departments: 'Engineering',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '7',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '7',
    departments: 'Customer Support',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '8',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '8',
    departments: 'Research & Development',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '9',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '9',
    departments: 'Quality Assurance',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },
  {
    key: '10',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '10',
    departments: 'Design',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '11',
    dot: <Text
      style={{
        fontSize: '25px',
      }}
    >...</Text>,
    id: '11',
    departments: 'Chăm sóc khách hàng',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function AllStaff() {
      return (
        <Layout hasSider>
          <Layout
            className="site-layout"
            style={{
              marginLeft: 0,
              bottom: 0,
              height: '140vh',
              backgroundColor: 'white',
              display:'inline'
            }}
          >
              <Button
                style={{
                //   marginLeft: '1420px',
                //   marginBottom: '0',
                margin:'20px 15px 20px 0px',
                float:'right',
    
                }}
                type="primary" size="large" ><PlusCircleOutlined/> Thêm Phòng Ban</Button>
            <Divider type="horizontal" style={{color: '#dddddd'}}/>
            <Content
              theme={theme1}
              style={{
                margin: '10px 16px 50px',
                overflow: 'initial',
              }}
            >
              <div
                style={{
                  // padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                  display:'inline',
                }}
              >
    
                <Table
                   style={{
                    display:'inline',
                    tableLayout:'inline',
                   }}
                  columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 2000, y: 2000 }} />;
              </div>
            </Content>
          </Layout>
        </Layout>
      );
}