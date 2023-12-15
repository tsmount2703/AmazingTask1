import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import Highlighter from 'react-highlight-words';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Button } from 'antd';
import {
  UserOutlined,
  EllipsisOutlined,
  UploadOutlined,
  UnorderedListOutlined,
  AlignLeftOutlined,
  BorderlessTableOutlined,
  CalendarOutlined,
  MoreOutlined,
} from '@ant-design/icons';
import Sider1 from '../components/Sider';
import Footer1 from '../components/Footer';
import { Link } from 'react-router-dom';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


const { Header, Content } = Layout;


const data = [
  {
    key: '1',
    dot: <EllipsisOutlined />,
    status: 'Hiệu Lực',
    id: '1',
    staffname: 'Vo Nguyen Trung Son',
    ctype: 'Hợp đồng xác nhận hạn',
    stypes: 'Gross To Net',
    depend: '1',
    sdate: '05/08/2023, 00:00',
    edate: '30/11/2023, 00:00',
    salary: '90.000.000',
    tax: '80.000.000',
    allowance: '0',
    note: '',
    createtime: '05/08/2023, 00:00',
    changedtime: '05/08/2023, 00:00',
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
    key: '2',
    dot: <EllipsisOutlined />,
    status: 'Hiệu Lực',
    id: '2',
    staffname: 'Nguyen Van Nhan Vien',
    ctype: 'Hợp đồng xác nhận hạn',
    stypes: 'Gross To Net',
    depend: '2',
    sdate: '05/08/2023, 00:00',
    edate: '30/11/2023, 00:00',
    salary: '9.000.000',
    tax: '8.000.000',
    allowance: '0',
    note: '',
    createtime: '05/08/2023, 00:00',
    changedtime: '05/08/2023, 00:00',
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function StaffContract() {
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
          color: filtered ? '#1677ff' : 'black',
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
      title: <span
        style={{}}
      >ID</span>,
      dataIndex: 'id',
      render: (id) => <span style={{ color: 'gray' }}>{id}</span>,
    },

    {
      title: <span
        style={{}}
      ><UserOutlined /> Tạo Bởi</span>,
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
              <span
                style={{
                  color: 'grey',
                }}
              >{staffname}</span>
            </>
          );
        }

      },
    },

    {
      title: <span
        style={{}}
      ><UnorderedListOutlined /> Loại Hợp Đồng</span>,
      key: 'ctype',
      dataIndex: 'ctype',
      render: (ctype) => {
        let color = 'cyan';

        if (ctype === 'Hợp đồng xác nhận hạn') {
          color = 'orange';
        }
        if (ctype === 'Hợp đồng không xác định hạn') {
          color = 'lime';
        }

        return (
          <Badge color={color} text={<span
            style={{
              color: 'grey',
            }}
          ><u>{ctype}</u></span>} />
        );
      },
    },

    {
      title: <span
        style={{}}
      ><UnorderedListOutlined /> Trạng thái</span>,
      dataIndex: 'status',
      render: (status) => {
        let color = 'cyan';
        let backgroundColor = '';

        if (status === 'Hiệu Lực') {
          color = '#9400D3';
          backgroundColor = '#D6B4FC';
        }
        if (status === 'Không Hiệu Lực') {
          color = '#B90E0A';
          backgroundColor = '#D6B4FC';

        }

        return (
          <Tag color={backgroundColor} key={status}
            style={{
              color: [color],
            }}
          >
            {status.toUpperCase()}
          </Tag>
        );


      },
    },

    {
      title: <span
        style={{}}
      ><UnorderedListOutlined /> Loại Lương</span>,
      dataIndex: 'stypes',
      render: (stype) => {
        let color = 'cyan';
        let backgroundColor = '';

        if (stype === 'Gross To Net') {
          color = '#27589C';
          backgroundColor = '#C9FCFA';

        }

        return (
          <Tag color={backgroundColor} key={stype} style={{
            color: [color],

          }}>
            {stype.toUpperCase()}
          </Tag>
        );


      },
    },


    {
      title: <span
        style={{}}
      ><BorderlessTableOutlined rotate={4} /> Người phụ thuộc</span>,
      dataIndex: 'depend',
      render: (depend) => <span style={{ color: 'gray' }}>{depend}</span>,

    },

    {
      title: <span
        style={{}}
      ><CalendarOutlined /> Ngày bắt đầu</span>,
      dataIndex: 'sdate',
      render: (sdate) => <span style={{ color: 'gray' }}>{sdate}</span>,

    },

    {
      title: <span
        style={{}}
      ><CalendarOutlined /> Ngày kết thúc</span>,
      dataIndex: 'edate',
      render: (edate) => <span style={{ color: 'gray' }}>{edate}</span>,

    },

    {
      title: <span
        style={{}}
      ><BorderlessTableOutlined rotate={4} /> Lương thỏa thuận</span>,
      dataIndex: 'salary',
      render: (salary) => <span style={{ color: 'gray', float: 'right' }} >{salary} <u>đ</u></span>,

    },

    {
      title: <span
        style={{}}
      ><BorderlessTableOutlined rotate={4} /> Lương đóng thuế</span>,
      dataIndex: 'tax',
      render: (tax) => <span style={{ color: 'gray', float: 'right' }}>{tax} <u>đ</u></span>,

    },

    {
      title: <span
        style={{}}
      ><BorderlessTableOutlined rotate={4} /> Tổng phụ cấp</span>,
      dataIndex: 'allowance',
      render: (allowance) => <span style={{ color: 'gray' }}>{allowance} <u>đ</u></span>,

    },

    {
      title: <span
        style={{}}
      ><AlignLeftOutlined rotate={360} /> Ghi chú</span>,
      dataIndex: 'note',
      render: (note) => {
        // let color = 'cyan';

        if (note === '') {
          note = <i>Chưa có ghi chú</i>;
        }
        if (note === 'Hợp đồng không xác định hạn') {
          //  color = 'lime';
        }

        return (
          <span style={{ color: 'grey' }}>{note}</span>
        );
      },

    },

    {
      title: <span
        style={{}}
      ><CalendarOutlined /> Thời gian tạo</span>,
      dataIndex: 'createtime',
      render: (createtime) => <span style={{ color: 'gray' }}>{createtime}</span>,

    },

    {
      title: <span
        style={{}}
      ><CalendarOutlined /> Thời gian thay đổi</span>,
      dataIndex: 'changedtime',
      render: (changedtime) => <span style={{ color: 'gray' }}>{changedtime}</span>,

    },

  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // const [mode, setMode] = useState('inline');
  const [theme1, setTheme1] = useState('light');
  // const changeMode = (value) => {
  //   setMode(value ? 'vertical' : 'inline');
  // };
  // const changeTheme = (value) => {
  //   setTheme1(value ? 'dark' : 'light');
  // };

  return (
    <Layout hasSider >
      <Sider1 />
      <Layout
        className="site-layout"
        style={{
          marginLeft: '320px',
          bottom: 0,
          // height: '140vh',
          marginRight: '10px',
          backgroundColor: "white"
        }}
      >
        <Header
          style={{
            marginLeft: '16px',
            // padding: 0,
            background: colorBgContainer,
            marginRight: '14px',
            border: '1px solid',
            borderColor: '#dddddd',
            borderRadius: '10px',
          }}

        >
          <h3 style={{ display: 'inline', float: 'left', margin: '0px 20px 0px 0px' }}>HỢP ĐỒNG NHÂN VIÊN</h3>
          <Link to="/dashboard">
            <Button size='large'
              style={{
                padding: '5px',
                margin: '13px 20px 0px 0px',
                float: 'right',
                border: '1px solid',
                borderColor: '#dddddd',
                borderRadius: '10px',
              }}
            >
              <UploadOutlined
                rotate={90}
                style={{
                  fontSize: '30px',
                  color: '#1677ff',
                }}
              />
            </Button>
          </Link>
        </Header>

        <Header
          theme={theme1}
          style={{
            background: colorBgContainer,
            margin: '16px 14px 10px 16px',
            border: '1px solid',
            borderColor: '#dddddd',
            borderRadius: '10px',
          }}
        >
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
              style={{
                border: '1px solid',
                borderColor: '#dddddd',
                borderRadius: '10px',
              }}
              columns={columns} dataSource={data} onChange={onChange} scroll={{ x: 'max-content' }} />
          </div>
        </Content>
        <Footer1 />
      </Layout>

    </Layout>
  );
}