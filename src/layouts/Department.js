import React, { useState } from 'react';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Typography, Button,Dropdown } from 'antd';
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
// function getItem1(label, key) {
//   return {
//     label,
//     key,
//   };
// }

const { Header, Content, Footer, Sider } = Layout;

const columns = [
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
    width: '2%',
  },

  {
    title: 'Tên nhân viên',
    dataIndex: 'staffname',
    width: '6%',
  },
  
  {
    title: 'Phòng ban',
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
    width:'8%',
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
    width: '3%',
    overflow:'auto'
  },

  {
    title: 'Giới tính',
    key: 'genders',
    dataIndex: 'genders',
    width: '4%',
    render: (_, { genders }) => (
      <>
        {genders.map((gender) => {
          let color = gender.length > 5 ? 'geekblue' : 'blue';
          if (gender === 'Nữ') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={gender}>
              {gender.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },

  {
    title: 'Email',
    dataIndex: 'email',
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
    onFilter: (value, record) => record.email.startsWith(value),
    filterSearch: true,
    width: '5%',
  },


  {
    title: 'Ngân Hàng',
    dataIndex: 'bank',
    filters: [
      {
        text: 'TPBank',
        value: 'TP',
      },
      {
        text: 'MBBank',
        value: 'MB',
      },
    ],
    onFilter: (value, record) => record.bank.startsWith(value),
    filterSearch: true,
    width: '7%',
  },

  {
    title: 'Ngày Sinh',
    dataIndex: 'date',
    width: '5%',
  },

  {
    title: 'Địa chỉ',
    dataIndex: 'address',
    width: '5%',
  },

  {
    title: 'Quốc gia',
    dataIndex: 'nation',
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
    onFilter: (value, record) => record.nation.startsWith(value),
    filterSearch: true,
    width: '5%',
  },

  {
    title: '#TK Ngân Hàng',
    dataIndex: 'bankaccount',
    width: '5%',
  },

];
const data = [
  {
    key: '1',
    id: '4',
    staffname:[<Avatar
    style={{
      backgroundColor: 'blueviolet',
      color: 'white',
    }}
  >
    s
  </Avatar>, ' string string'],
    departments: 'Sales',
    phone: 'stringdbjdvbjsbvbsjvbbsjvbjbsvjbsjvbsjbvjs',
    genders: ['Nam'],
    email: 'test1@gmail.com',
    bank: 'string',
    date: '4 tháng 8 năm 2023',
    address: 'string',
    nation: 'string',
    bankaccount: 'string',
  },
  {
    key: '2',
    id: '3',
    staffname: [<Avatar
      style={{
        backgroundColor: 'blueviolet',
        color: 'white',
      }}
    >
      N
    </Avatar>, ' Nguyen Van Nhan Vien'],
    departments: 'Chăm sóc khách hàng',
    phone: 'string',
    genders: ['Nam'],
    email: 'staff@test.com',
    bank: 'TPBank',
    date: '6 tháng 7 năm 2005',
    address: 'string',
    nation: 'string',
    bankaccount: 'string',
  },

  {
    key: '3',
    id: '2',
    staffname: [<Avatar
      style={{
        backgroundColor: 'blueviolet',
        color: 'white',
      }}
    >
      N
    </Avatar>, ' Nguyen Van Quan Ly'],
    departments: 'Sales',
    phone: 'string',
    genders: ['Nam'],
    email: 'hrstaff@test.com',
    bank: 'MBBank',
    date: '6 tháng 7 năm 2003',
    address: 'string',
    nation: 'string',
    bankaccount: 'string',
  },

  {
    key: '4',
    id: '1',
    staffname: [<Avatar
      style={{
        backgroundColor: 'blueviolet',
        color: 'white',
      }}
    >
      V
    </Avatar>, ' Van Nguyen'],
    departments: 'Sales',
    phone: 'string',
    genders: ['Nữ'],
    email: 'hrmanager@test.com',
    bank: 'TPBank',
    date: '4 tháng 8 năm 2002',
    address: 'string',
    nation: 'string',
    bankaccount: 'string',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function Department() {
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
        <Layout >
    
          <Layout
            className="site-layout"
            style={{
              // marginLeft: 200,
              bottom: 0,
              height: '100vh',
            }}
          >
            <Header
              theme={theme1}
              style={{
                backgroundColor: 'white',
                marginTop: '16px',
                marginLeft: '16px',
                marginRight: '16px',
              }}
            >
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="middle"
                onSearch={onSearch}
                style={{
                  width: '200px',
                  marginTop: '16px',
                  marginRight: '350px'
                }}
              />
    
              <Dropdown
                menu={{
                  // items,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space
                    style={{
                      color: 'black',
                      marginRight: '50px',
                    }}
                  >
                    Toàn Bộ Phòng Ban
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
    
              <Button danger
                style={{
                  borderColor: 'greenyellow',
                  color: 'greenyellow',
                  marginRight: '420px'
                }}
              >Làm mới</Button>
    
              <Button type="primary"><PlusCircleOutlined /> Thêm nhân viên</Button>
            </Header>
            <Content
             theme={theme1}
              style={{
                margin: '24px 16px 0',
                overflow: 'initial',
              }}
            >
              <div
                style={{
                  padding: 24,
                  textAlign: 'center',
                  background: colorBgContainer,
                }}
              >
                <Table
                  columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 5000, y: 5000 }} />;
              </div>
            </Content>
          </Layout>
        </Layout>
      );
}