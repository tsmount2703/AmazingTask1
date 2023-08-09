import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import Highlighter from 'react-highlight-words';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Typography, Button, Dropdown,Select } from 'antd';
import {
  PlusCircleOutlined,
  UserOutlined,
  EllipsisOutlined,
  UploadOutlined,
  UnorderedListOutlined,
  AlignLeftOutlined,
  BorderlessTableOutlined,
  PhoneOutlined,
  CalendarOutlined,
  MoreOutlined,
} from '@ant-design/icons';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


const { Header, Content} = Layout;
const {Option} = Select;


const data = [
  {
    key: '1',
    dot: <EllipsisOutlined />,
    status: 'Manager',
    id: '1',
    staffname: 'string string',
    departments: 'Sales',
    phone: 'string',
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
    dot: <EllipsisOutlined />,
    status: 'Staff',
    id: '2',
    staffname: 'Nguyen Van Nhan Vien',
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
    dot: <EllipsisOutlined />,
    status: 'Manager',
    id: '3',
    staffname: 'Nguyen Van Quan Ly',
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
    dot: <EllipsisOutlined />,
    status: 'Staff',
    id: '4',
    staffname: 'Van Nguyen',
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
  },

  {
    dataIndex: 'status',
    key: 'status',
    render: (text) => {
      let color = '';

      if (text === 'Manager') {
        color = '#4169E1';
      }
      return (
        <Avatar
          style={{
            backgroundColor: color,
          }}
          icon={<UserOutlined />}
        />
      )
    }
  },
  {
    title: 'ID',
    dataIndex: 'id',
  },

  {
    title: [ <AlignLeftOutlined />,' Tên nhân viên'],
    dataIndex: 'staffname',
    ...getColumnSearchProps('staffname'),
    render: (staffname) => {
      let letter = staffname.charAt(0);
      if (staffname !== '') {
        return (
          <>
            <Avatar
              style={{
                backgroundColor: '#800080',
                color: 'white',
                marginRight: '5px',
              }}
            >
              {letter}
            </Avatar>
            <>{staffname}</>
          </>
        );
      }

    },
  },

  {
    title: [<UnorderedListOutlined />, ' Phòng ban'],
    key: 'departments',
    dataIndex: 'departments',
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
    title: [<PhoneOutlined rotate={90} />, ' Số điện thoại'],
    dataIndex: 'phone',
  },

  {
    title: [<UnorderedListOutlined />, ' Giới tính'],
    key: 'genders',
    dataIndex: 'genders',
    // width: '4%',
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
    title: [ <AlignLeftOutlined />,' Email'],
    dataIndex: 'email',
  },


  {
    title: [ <AlignLeftOutlined />,' Ngân hàng'],
    dataIndex: 'bank',
  },

  {
    title: [<CalendarOutlined />,' Ngày Sinh'],
    dataIndex: 'date',
  },

  {
    title: [ <AlignLeftOutlined />,' Địa chỉ'],
    dataIndex: 'address',
    
  },

  {
    title: [ <AlignLeftOutlined />,' Quốc gia'],
    dataIndex: 'nation',
  },

  {
    title: [<BorderlessTableOutlined rotate={4} />, ' TK Ngân Hàng'],
    dataIndex: 'bankaccount',
    
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
    <Layout >

      <Layout
        className="site-layout"
        style={{
          // marginLeft: 200,
          bottom: 0,
          height: '100vh',
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
          <h3 style={{display: 'inline', float:'left',margin:'0px 20px 0px 0px'}}>DANH SÁCH NHÂN VIÊN</h3>
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
          theme={theme1}
          style={{
            background: colorBgContainer,
            margin:'16px 14px 10px 16px',
          }}
        >
          <div
          style={{
            display:'flex',
            justifyContent:'space-between'

          }}>
            <Input 
              placeholder='Tìm kiếm'
                style={{
                  borderStyle: 'none',
                  borderBottom: 'solid 0.5px ',
                  borderRadius: 0,
                  display: 'inline',
                  width: '200px',
                  float: 'left',
                  // marginTop: '16px'
                  margin: '15px 0px 0px 0px',
                }}
              />
            <div 
            style={{
              display:'flex',
              justifyContent:'space-between'
            }}
            >
          <Select
          style={{
            margin: '15px 0px 0px 0px',
          }}
          defaultValue=""
          // style={{ width:"" }}
          // onChange={handleFilterChange}
          // value={filterDepartment}
          bordered={false}
        >
          <Option value="">Tất Cả Phòng Ban</Option>
          <Option value="Finance">Phòng Kế Toán</Option>
          <Option value="Human Resource">Phòng Nhân Sự</Option>
          <Option value="Sales">Phòng Kinh Doanh</Option>
          <Option value="Marketing">Phòng Tiếp Thị</Option>
          <Option value="Operations">Phòng Vận Hành</Option>
          <Option value="Engineering">Phòng Kỹ Thuật</Option>
          <Option value="Customer Support">Phòng Hỗ Trợ Khách Hàng</Option>
          <Option value="Research & Development">
            Phòng Nghiên Cứu Và Phát Triển
          </Option>
          <Option value="Quality Assurance">Phòng Đảm Bảo Chất Lượng</Option>
          <Option value="Design">Phòng Thiết Kế</Option>
          <Option value="Chăm sóc khách hàng">Phòng Chăm Sóc Khách Hàng</Option>
        </Select>

              <Button
                style={{
                  borderColor: '#82E0AA',
                  color: '#82E0AA',
                  margin: '15px 0px 0px 0px',
                  // marginRight: '420px'

                }}
              >Làm mới</Button>

            </div>
              

          <Button type="primary" size='large'

            style={{
              // float: 'right',
              margin: '13px 0px 0px 0px',
            }}>

            <PlusCircleOutlined /> Thêm nhân viên</Button>
          </div>
           

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
              // padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              display: 'inline',
            }}
          >
            <Table
              columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 'max-content' }} />;
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}