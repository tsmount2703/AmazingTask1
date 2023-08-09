import React, { useState } from 'react';
import { useRef } from 'react';
import Highlighter from 'react-highlight-words';
import { Input, Space, Badge, Table, Layout, theme, Typography, Button } from 'antd';
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
} from '@ant-design/icons';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

const { Header, Content, Footer, Sider } = Layout;



const data = [
  {
    key: '1',
    dot: <EllipsisOutlined />,
    id: '1',
    departments: 'Sales',
    manager: 'Nguyen Van Quan Ly',
    nos: '3',
    eofm: 'hrstaff@test.com',
    phone: 'string'
  },

  {
    key: '2',
    dot: <EllipsisOutlined />,
    id: '2',
    departments: 'Marketing',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '3',
    dot: <EllipsisOutlined />,
    id: '3',
    departments: 'Finance',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '4',
    dot: <EllipsisOutlined />,
    id: '4',
    departments: 'Human Resource',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '5',
    dot: <EllipsisOutlined />,
    id: '5',
    departments: 'Operations',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '6',
    dot: <EllipsisOutlined />,
    id: '6',
    departments: 'Engineering',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '7',
    dot: <EllipsisOutlined />,
    id: '7',
    departments: 'Customer Support',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '8',
    dot: <EllipsisOutlined />,
    id: '8',
    departments: 'Research & Development',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '9',
    dot: <EllipsisOutlined />,
    id: '9',
    departments: 'Quality Assurance',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },
  {
    key: '10',
    dot: <EllipsisOutlined />,
    id: '10',
    departments: 'Design',
    manager: '',
    nos: '0',
    eofm: '',
    phone: 'string'
  },

  {
    key: '11',
    dot: <EllipsisOutlined />,
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

export default function Department() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <MoreOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: '',
      dataIndex: 'dot',
      // width: '5%',
    },
  
    {
      title: 'ID',
      dataIndex: 'id',
    },
  
    {
      title: [<UserOutlined />, ' Tên phòng ban'],
      key: 'departments',
      dataIndex: 'departments',
      // filters: [
      //   {
      //     text: 'Sales',
      //     value: 'Sales',
      //   },
      //   {
      //     text: 'Marketing',
      //     value: 'Marketing',
      //   },
  
      //   {
      //     text: 'Finance',
      //     value: 'Finance',
      //   },
  
      //   {
      //     text: 'Human Resource',
      //     value: 'Human Resource',
      //   },
  
      //   {
      //     text: 'Operations',
      //     value: 'Operations',
      //   },
  
      //   {
      //     text: 'Engineering',
      //     value: 'Engineering',
      //   },
  
      //   {
      //     text: 'Customer Support',
      //     value: 'Customer Support',
      //   },
  
      //   {
      //     text: 'Research & Development',
      //     value: 'Research & Development',
      //   },
  
      //   {
      //     text: 'Quality Assurance',
      //     value: 'Quality Assurance',
      //   },
  
      //   {
      //     text: 'Design',
      //     value: 'Design',
      //   },
  
      //   {
      //     text: 'Chăm sóc khách hàng',
      //     value: 'Chăm sóc khách hàng',
      //   },
  
      // ],
      // onFilter: (value, record) => record.departments.startsWith(value),
      // filterSearch: true,
      
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
      title: [<UserOutlined />, ' Quản lý ',<ArrowUpOutlined />],
      dataIndex: 'manager',
      ...getColumnSearchProps('staffname'),
      // filters: [
      //   {
      //     text: '1',
      //     value: '1',
      //   },
      //   {
      //     text: '2',
      //     value: '2',
      //   },
  
      //   {
      //     text: '3',
      //     value: '3',
      //   },
  
      //   {
      //     text: '4',
      //     value: '4',
      //   },
      // ],
      // onFilter: (value, record) => record.manager.startsWith(value),
      // filterSearch: true,
    },
  
  
    {
      title: [<BorderlessTableOutlined rotate={4} />, ' Số nhân viên'],
      dataIndex: 'nos',
    },
  
    {
      title:  [ <AlignLeftOutlined />,' Email quản lý'],
      dataIndex: 'eofm',
    },
  
    {
      title: [<PhoneOutlined rotate={90} />, ' Số điện thoại'],
      dataIndex: 'phone',
    },
  
  
  ];

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
      <Layout
        className="site-layout"
        style={{
          marginLeft: 0,
          bottom: 0,
          height: '140vh',
          // backgroundColor: 'white',
          // display: 'inline'
          marginRight:'10px',

        }}
      >
        <Header
          style={{
            marginLeft:'16px',
            // padding: 0,
            background: colorBgContainer,
            marginRight:'14px',
          }}

        >
          <h3 style={{display: 'inline', float:'left',margin:'0px 20px 0px 0px'}}>DANH SÁCH PHÒNG BAN</h3>
            <UploadOutlined
              rotate={90}
              style={{
                fontSize: '30px',
                padding: '5px',
                margin: '13px 20px 0px 0px',
                float: 'right',
                color: '#1677ff',
                border: '1px solid',
                borderColor: '#dddddd',
                borderRadius: '10px',
              }}
            />
        </Header>

        <Header
        style={{
          backgroundColor: 'white',
          margin: '20px 15px 0px 16px',

        }}>
          <Button
            style={{
              display:'float',
              margin: '15px 15px 20px 0px',
              float: 'right',

            }}
            type="primary" size="large" ><PlusCircleOutlined /> Thêm Phòng Ban</Button>
          {/* <Divider type="horizontal" style={{ color: '#dddddd' }} /> */}
        </Header>

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
              display: 'inline',
            }}
          >

            <Table
              columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 'max-content', }} />;
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}