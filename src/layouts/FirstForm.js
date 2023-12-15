import React, { useState } from "react";
import { Form, Input, Button, Space } from 'antd';
import { useForm } from "react-hook-form";

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
const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);

    // Watch all values
    const values = Form.useWatch([], form);
    React.useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [values]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
        </Button>
    );
};



export default function FirstForm() {
    const [form] = Form.useForm();


    const onFinish = (value) => {
        console.log(value);
    };


    const [isValid, setIsValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [isValidMatch, setIsValidMatch] = useState(true);




    const handlePasswordChange = (password) => {
        const { value } = password.target;
        setPassword(value);
        setIsValid(validatePassword(value));
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };



    const handleConfirmPasswordChange = (confirmPassword) => {
        setConfirmPassword(confirmPassword.target.value);
        // Check if passwords match
        if (password === confirmPassword) {
            setPasswordMatch(true);
            setIsValidMatch(true);
        } else {
            setPasswordMatch(false);
            setIsValidMatch(false);

        }

    }


    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if passwords match
        if (password === confirmPassword) {
            // Passwords match, continue with submission
            // Add your logic here (e.g. API call, form submission)

            // Reset the input fields
            setPassword('');
            setConfirmPassword('');
            setPasswordMatch(true);
        } else {
            // Passwords don't match, set an error state
            setPasswordMatch(false);
        }
    };

    return (
        <Form
            // onSubmit={handleSubmit}
            // form={form}
            // name="validateOnly"
            autoComplete="off"
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
            style={{
                padding: '20px',
                fontWeight: 600,
            }}
        >
            <MyFormItemGroup >

                <MyFormItem
                    name="name"
                    label="Tên đăng nhập"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập tên đăng nhập"
                        },
                    ]}
                >
                    <Input
                        style={inputStyle}
                        placeholder='Nhập tên đăng nhập'
                    />

                </MyFormItem>

                <MyFormItem
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email"
                        },
                    ]}
                >
                    <Input style={inputStyle}
                        placeholder='Nhập email'

                    />
                </MyFormItem>

                <MyFormItem name="password" label="Mật khẩu">
                    <Input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        style={inputStyle}
                        placeholder='Nhập mật khẩu'

                    />
                    {!password ? (<div></div>) : (
                        <div>
                            {isValid ? (
                                <p style={{ color: "green" }}>Mât khẩu hợp lệ</p>
                            ) : (
                                <p style={{ color: "red" }}>
                                    Mật khẩu có ít nhất 8 kí tự bao gồm 1 kí tự đặc biệt, 1 chữ in
                                    và 1 chữ số
                                </p>
                            )}

                        </div>

                    )}

                </MyFormItem>

                <MyFormItem name="confirmPassword" label="Xác nhận lại mật khẩu">
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        style={inputStyle}
                        placeholder='Nhập lại mật khẩu'

                    />
                    {!confirmPassword ? (<div></div>) : (

                        <div>
                            {password === confirmPassword ? (<p style={{ color: "green" }}>Mật khẩu trùng khớp</p>) : (
                                <div>

                                    <p style={{ color: "red" }}>
                                        Mật khẩu chưa trùng khớp
                                    </p>
                                </div>

                            )}
                        </div>

                    )}



                </MyFormItem>


            </MyFormItemGroup>
        </Form>
    )
}