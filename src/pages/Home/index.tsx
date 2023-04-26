import React from "react";
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (

    <Row>
      <Col span={12}>
        <h2 className="title-page">ĐẦM SEN PARK</h2>
      </Col>
      <Col span={12}>
        <Link to={'/payment'}>
          <button className="btn btn-ticket">Đặt vé</button>
        </Link>
      </Col>
    </Row>
  )
}

export default Home