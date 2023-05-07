import React from "react";
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

const EventPage: React.FC = () => {
  return (
    <div className="container-events">
      <div className="container-events__main">
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div> <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div> <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div> <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card></div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div> <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card></div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default EventPage