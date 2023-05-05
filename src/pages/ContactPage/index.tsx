import React from "react";
import { Col, Row } from 'antd';
import { Card } from 'antd';
const ContactPage: React.FC = () => {
  return (
    <div>
      <h2 className="title-page" style={{ textAlign: "center" }}>Liên hệ</h2>
      <div className="wrapper">
        <Row>
          <Col flex={3}>
            <Card title="Card title" bordered={false} style={{ width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
              <button className="btn btn-ticket">Gửi liên hệ</button>
            </Card>
          </Col>
          <Col flex={2}>
            <Card title="Card title" bordered={true} style={{ width: "100%" }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ContactPage