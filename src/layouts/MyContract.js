import React, { useState } from 'react';
import { Input, Space, Tag, Badge, Avatar, Table, Layout, theme, Button, Select, Typography } from 'antd';
import {

  UploadOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import Sider1 from '../components/Sider';
import Footer1 from '../components/Footer';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;


const data = [
  {
    key: '1',
    dot: <EllipsisOutlined />,
    status: 'Hiệu Lực',
    id: '1',
    staffname: 'Nguyen Van Quan Ly',
    ctype: 'Hợp đồng xác nhận hạn',
    stypes: 'Gross To Net',
    depend: '1',
    sdate: '05/08/2023',
    edate: '30/11/2023',
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
    idcard: 'AAAA0000002'
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

export default function MyContract() {
  const newstaff = data?.find(staff => staff.id === '1')
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
    <Layout hasSider
    >
      <Sider1 />
      <Layout
        className="site-layout"
        style={{
          marginLeft: '320px',
          bottom: 0,
          // height: '140vh',
          marginRight: '10px',
          backgroundColor:'white'
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
          <h3 style={{ display: 'inline', float: 'left', margin: '0px 20px 0px 0px' }}>HỢP ĐỒNG CỦA TÔI</h3>
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

        <Content
          // theme={theme1}
          style={{
            margin: '10px 16px 50px',
            overflow: 'initial',
            backgroundColor: 'white',
            border: '1px solid',
            borderColor: '#dddddd',
            borderRadius: '10px',
            minHeight: 'max-content'

          }}
        >

          <Typography
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              marginLeft: '100px',
              // textAlign:'left',
            }}
          >
            <Typography
              style={{}}
            >
              <h1>Thông Tin Hợp Đồng</h1>

            </Typography>

            <Typography style={{ textAlign: 'left', marginLeft: '90px', }}>

              <Typography>
                <h2
                  style={{
                    color: '#0772d8',
                  }}
                >I.Thông tin người lao động</h2>
              </Typography>

              <Typography dataSource={newstaff} style={{

                fontSize: '20px',
                marginLeft: ' 50px',
                // fontWeight: 600,
              }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '450px',
                    height: '50px'
                  }}
                >
                  <p style={{}}> <b>Họ và tên  :</b> {`${newstaff.staffname}`}  </p>
                  <p><b>Giới tính  :</b> {`${newstaff.genders}`}  </p>
                </div>

                <p><b>Sinh ngày  : </b> {`${newstaff.date}`} </p>

                <p><b>CMND/CCCD  : </b>  {`${newstaff.idcard}`}  </p>

                <p><b>Địa chỉ  :</b>  {`${newstaff.address}`} </p>

                <p><b>Số điện thoại  :</b>   {`${newstaff.phone}`} </p>

              </Typography>

              <Typography>
                <h2
                  style={{
                    color: '#0772d8',
                  }}
                >II.Hợp đồng lao động</h2>
              </Typography>

              <Typography style={{ marginLeft: '20px' }}>
                <h3 style={{
                  color: '#2d75ae',
                }}>1. Công việc, phòng ban và thời gian hợp đồng </h3>
              </Typography>

              <Typography dataSource={newstaff} style={{

                fontSize: '20px',
                marginLeft: ' 50px',
                // fontWeight: 600,
              }}>

                <p><b>Phòng ban công tác  :</b> {`${newstaff.departments}`}  </p>

                <p><b>Loại hợp đồng  :</b>  {`${newstaff.ctype}`} </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '550px',
                    height: '50px',
                  }}
                >
                  <p style={{}}><b>Từ ngày  :</b> {`${newstaff.sdate}`}  </p>
                  <p><b>Đến ngày  :</b> {`${newstaff.edate}`}  </p>
                </div>

              </Typography>

              <Typography style={{ marginLeft: '20px' }}>
                <h3 style={{
                  color: '#2d75ae',
                }}>2. Lương, phụ cấp và các khoản bổ sung khác </h3>
              </Typography>

              <Typography dataSource={newstaff} style={{

                fontSize: '20px',
                marginLeft: ' 50px',
                // fontWeight: 600,
              }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '600px',
                    height: '50px'
                  }}
                >
                  <p style={{}}> <b>Lương cơ bản  :</b> {`${newstaff.salary}`}   </p>
                  <p><b>Lương tính thuế  :</b>  {`${newstaff.tax}`} </p>
                </div>

                <p><b>Các phụ cấp (mỗi tháng)  :</b> </p>

                <p><b>Hình thức trả lương  :</b> Chuyển khoản</p>

              </Typography>

              <Typography
                dataSource={newstaff}
                style={{
                  marginLeft: '90px',
                  fontSize: '18px'
                }}
              >
                Số TK ngân hàng  : {`${newstaff.bankaccount}`}
                <br />
                <br />
                Chủ tài khoản  : {`${newstaff.staffname}`}
                <br />
                <br />
                Ngân hàng  : {`${newstaff.bank}`}

              </Typography>
              <Typography style={{ marginLeft: '20px' }}>
                <h3 style={{
                  color: '#2d75ae',
                }}>3. Thời gian làm việc và ghi chú</h3>
              </Typography>

              <Typography dataSource={newstaff} style={{

                fontSize: '20px',
                marginLeft: ' 50px',
                // fontWeight: 600,
              }}>

                <p><b>Số ngày làm việc một tuần  :</b> 5</p>

                <p><b>Số người phụ thuộc  :</b> {`${newstaff.depend}`} </p>

                <p><b>Ghi chú  :</b> {`${newstaff.note}`}  </p>

              </Typography>


            </Typography>

          </Typography>

        </Content>

        <Footer1 />

      </Layout>
    </Layout>
  )
}