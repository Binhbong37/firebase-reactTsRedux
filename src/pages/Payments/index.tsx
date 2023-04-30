import React from 'react'
import { Link } from 'react-router-dom';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Col, Row
} from 'antd';

const Payments: React.FC = () => {
  return (
    <div className='wrapper'>
      <h2 className='title-page' style={{ textAlign: "center" }}>Thanh toán</h2>
      <div className="home-content">
        <div className="home-content__left">
          <h3 className="home-content__left-title">VÉ CỔNG - VÉ GIA ĐÌNH</h3>
          <Form className='form-payment'>
            <Row>
              <Col span={8}>
                <Form.Item label="Số tiền thanh toán">
                  <Input value={"123 456 789"} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số lượng vé">
                  <Input value={"7"} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Ngày sử dụng">
                  <Input value={"01/06/2023"} style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Thông tin liên hệ">
              <Input value={"Hoàng Văn Bình"} />
            </Form.Item>
            <Form.Item label="Số điện thoại">
              <Input value={"123 456 789"} />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={"hoangvanbinh@gmail.com"} />
            </Form.Item>
          </Form>
        </div>
        <div className="home-content__right">
          <h3 className="home-contents__right-title">THÔNG TIN THANH TOÁN</h3>
          <Form className="home-content__right-form rest-form">
            <Form.Item label="Số thẻ">
              <InputNumber value={"123 456 789"} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Họ tên chủ thẻ">
              <Input value={'Hoàng Văn Bình'} />
            </Form.Item>
            <Form.Item label="Ngày hết hạn">
              <DatePicker />
            </Form.Item>

            <Form.Item
              label="CGV/CCV"
            >
              <Input value={"..."} />
            </Form.Item>

            <Link to={'/paymentsucess'}><Button className="btn btn-ticket">Thanh toán</Button></Link>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Payments