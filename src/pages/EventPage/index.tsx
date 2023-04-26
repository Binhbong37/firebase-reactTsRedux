import React from "react";
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Link } from "react-router-dom";

const { Meta } = Card;

const EventPage: React.FC = () => {
  return (
    <div>
      <h2 className="title-page">Sự kiện nổi bật</h2>
      <div className="event-layout">
        <Row>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />

              <Link to={'/event/event-1'}>

                <button

                  className="btn btn-detail">Xem chi tiết</button>
              </Link>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <button className="btn btn-detail">Xem chi tiết</button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <button className="btn btn-detail">Xem chi tiết</button>
            </Card>
          </Col>
          <Col span={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
              <button className="btn btn-detail">Xem chi tiết</button>
            </Card>
          </Col>

        </Row>
      </div>
    </div>
  )
}

export default EventPage