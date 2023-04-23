import { Form, Button, Input, Select, DatePicker } from 'antd'
import './addUser.css';
import { useEffect, useState } from 'react';
import { useAction } from '../../../helpers/useAction';
import { useNavigate, Link } from 'react-router-dom'

const AddUser = () => {
  const [newUser, setNewUser] = useState<any>({});
  const { addNewUser } = useAction();
  const navigate = useNavigate()

  const tranferData = async () => {
    if (Object.keys(newUser).length === 0 || newUser.outOfDate === false) {
      return;
    }

    addNewUser(newUser)
    navigate('/')

  }

  useEffect(() => {
    tranferData()

  }, [newUser])

  return (
    <div className='addContainer'>
      <h2 style={{ textAlign: 'center' }}>Add User</h2>

      <Form
        autoComplete='off'
        labelCol={{ span: 7 }} wrapperCol={{ span: 10 }}
        onFinish={(value) => {
          setNewUser(value)
        }}
        onFinishFailed={(err) => {
          setNewUser(err)
        }}
      >
        <Form.Item name={'lName'} label='lName'
          rules={[{
            required: true,
            message: "Provide your name"
          },
          { whitespace: true },
          { min: 2 }
          ]}

          hasFeedback
        >
          <Input placeholder='Enter your name' />
        </Form.Item>
        {/* email */}
        <Form.Item name={'email'} label='Email'
          rules={[{
            required: true,
            message: "Provide your email"
          },
          {
            type: 'email',
            message: "Please provide exact email"
          },
          ]}

          hasFeedback
        >
          <Input placeholder='Enter your email' />
        </Form.Item>
        {/* gender */}
        <Form.Item name={'gender'} label='Gender (optional)'>
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="fmale">Fe-Male</Select.Option>
          </Select>
        </Form.Item>
        {/* Date */}

        <Form.Item name={"dob"} label="Date of Birth"
          rules={[{
            required: true,
            message: "Provide your dateOfBirth"
          },
          ]}

          hasFeedback
        >
          <DatePicker
            style={{ width: "100%" }}
            picker='date' placeholder='Choose your date' />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 20 }}>
          <Button block type='primary' htmlType='submit'>Add</Button>
        </Form.Item>
      </Form>
      <Link to="/" >Back to list</Link>
    </div>
  )
}

export default AddUser