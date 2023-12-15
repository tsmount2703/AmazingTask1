import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Col, Row, Slider } from 'antd';
import { Radio } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker } from 'antd';
import { Select, Space } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
};
dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
    `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
        .endOf('week')
        .format(weekFormat)}`;
const gutters = {};
const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};

const inputStyle = {
    height: '43px'
}

export default function SecondForm() {
    const onFinish = (value) => {
        console.log(value);
    };
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Form
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
            style={{
                padding: '20px',
                fontWeight: 600,
            }}
        >
            <MyFormItemGroup prefix={['user']}>
                <MyFormItemGroup>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyFormItem 
                            name="lastName" 
                            label="Họ"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập Họ"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Họ'
                                />
                            </MyFormItem>
                        </Col>

                        <Col span={12}>
                            <MyFormItem 
                            name="firstName" 
                            label="Tên"
            
                            rules={[
                                {
                                    required:true,
                                    message:"Vui lòng nhập Tên"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Tên'
                                />
                            </MyFormItem>

                        </Col>
                    </Row>

                </MyFormItemGroup>

                <MyFormItemGroup>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyFormItem 
                            name="genders" 
                            label="Giới tính"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn "
                                },
                            ]}
                            >
                                <Radio.Group
                                    style={{
                                        float: 'left'
                                    }}
                                    onChange={onChange} value={value}>
                                    <Radio value={'Nữ'}>Nữ</Radio>
                                    <Radio value={'Nam'}>Nam</Radio>
                                </Radio.Group>
                            </MyFormItem>
                        </Col>

                        <Col span={12}>
                            <MyFormItem 
                            name="nation" 
                            label="Quốc tịch"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập Quốc tịch"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Nhập quốc tịch'
                                />
                            </MyFormItem>

                        </Col>
                    </Row>

                </MyFormItemGroup>

                <MyFormItemGroup>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyFormItem 
                            name="phone" 
                            label="Số điện thoại"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập Số điện thoại"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Nhập số điện thoại'
                                />
                            </MyFormItem>
                        </Col>

                        <Col span={12}>
                            <MyFormItem 
                            name="date" 
                            label="Ngày sinh"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập Ngày Sinh"
                                },
                            ]}
                            >

                                <DatePicker
                                    style={{
                                        width: '100%',
                                        height: '43px'
                                    }}
                                    defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />

                            </MyFormItem>

                        </Col>
                    </Row>

                </MyFormItemGroup>

                <MyFormItem
                 name="address" 
                 label="Địa chỉ"
                 rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập Địa chỉ"
                    },
                ]}
                 >
                    <Input style={inputStyle}
                        placeholder='Nhập địa chỉ'
                    />
                </MyFormItem>

                <MyFormItemGroup>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyFormItem 
                            name="departments" 
                            label="Phòng Ban"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng chọn Phòng Ban"
                                },
                            ]}
                            >
                                    <Select
                                        defaultValue="Sales"
                                        style={{
                                            width: '100%',
                                            height: '43px',
                                        }}
                                        onChange={handleChange}
                                        options={[
                                            {
                                                value: 'Sales',
                                                label: 'Sales',
                                            },
                                            {
                                                value: 'Marketing',
                                                label: 'Marketing',
                                            },
                                            {
                                                value: 'Finance',
                                                label: 'Finance',
                                            },
                                            {
                                                value: 'Human Resource',
                                                label: 'Human Resource',  
                                            },
                                            {
                                                value: 'Operations',
                                                label: 'Operations',  
                                            },
                                            {
                                                value: 'Engineering',
                                                label: 'Engineering',  
                                            },
                                            {
                                                value: 'Customer Support',
                                                label: 'Customer Support',  
                                            },
                                            {
                                                value: 'Research & Development',
                                                label: 'Research & Development',  
                                            },
                                            {
                                                value: 'Quality Assurance',
                                                label: 'Quality Assurance',  
                                            },
                                            {
                                                value: 'Design',
                                                label: 'Design',  
                                            },
                                            {
                                                value: 'Chăm sóc khách hàng',
                                                label: 'Chăm sóc khách hàng',  
                                            },
                                        ]}
                                    />

                            </MyFormItem>
                        </Col>

                        <Col span={12}>
                            <MyFormItem 
                            name="idcard" 
                            label="CMND/CCCD"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập CMND/CCCD"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Nhập CMND/CCCD'
                                />
                            </MyFormItem>

                        </Col>
                    </Row>

                </MyFormItemGroup>

                <MyFormItemGroup>
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <MyFormItem 
                            name="bank" 
                            label="Tên ngân hàng"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập Tên ngân hàng"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Nhập tên ngân hàng'
                                />
                            </MyFormItem>
                        </Col>

                        <Col span={12}>
                            <MyFormItem 
                            name="bankaccount" 
                            label="Số tài khoản ngân hàng"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập STK ngân hàng"
                                },
                            ]}
                            >
                                <Input style={inputStyle}
                                    placeholder='Nhập STK ngân hàng'
                                />
                            </MyFormItem>

                        </Col>
                    </Row>

                </MyFormItemGroup>

            </MyFormItemGroup>

        </Form>
    )
}