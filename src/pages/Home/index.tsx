import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Col, Row
} from 'antd';
import damsen from '../../public/imgs/damsen.png'


const Home: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="img-title">

        <img src={damsen} alt="img" />

        <h2 className="title-page">ĐẦM SEN <br /> PARK</h2>

      </div>
      <div className="home-content">
        <div className="home-content__left"></div>
        <div className="home-content__right">
          <h3 className="home-content__right-title">VÉ CỦA BẠN</h3>
          <Form className="home-content__right-form">
            <Form.Item label="">
              <Select value={'Gói gia đình'}>
                <Select.Option value="demo">Gói cá nhân</Select.Option>
              </Select>
            </Form.Item>
            {/* so luong ve */}
            <Row>
              <Col span={12}><Form.Item label="">
                <InputNumber placeholder="Số lượng vé" style={{ width: "100%" }} />
              </Form.Item></Col>
              <Col span={12}><Form.Item label="">
                <DatePicker placeholder="Ngày sử dụng" />
              </Form.Item></Col>
            </Row>

            <Form.Item label="">
              <Input placeholder="Họ và tên" />
            </Form.Item>

            <Form.Item
              name="phone"
              label=""

            >
              <Input placeholder="Nhập số điện thoại" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="email"
              label=""

            >
              <Input placeholder="Nhập địa chỉ email" />
            </Form.Item>

            <Link to={'/payment'}><Button className="btn btn-ticket">Đặt vé</Button></Link>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Home