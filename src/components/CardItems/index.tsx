import React from 'react';
import { Col, Card } from 'antd';
import qr from '../../public/imgs/QR.png'
const { Meta } = Card;


const CardItem: React.FC = () => {
  return (

    <Col span={4}>
      <Card cover={<img alt="QR" src={qr} />} bordered={true}
        style={{ padding: "10px" }}
      >
        <Meta title="ALT20210501" />
        Vé cổng
      </Card>
    </Col>

  )
}

export default CardItem