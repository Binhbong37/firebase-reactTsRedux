import React from 'react';
import { Col, Row, Card } from 'antd';

const PaymentsSucess: React.FC = () => {
  return (
    <>
      <div className='wrapper'>
        <h2 className='title-page' style={{ textAlign: 'center' }}>Thanh toán thành công</h2>
        <div className='bottom-btn'>
          <button className=''>Tải về</button>
          <button className=''>Gửi email</button>
        </div>
        <div className="payment">
          <div className="payment-center">
            <div className='grid'>
              <Row justify="space-evenly">
                <Col span={4}><Card title="Card title" bordered={true}>
                  Card content
                </Card></Col>
                <Col span={4}><Card title="Card title" bordered={true}>
                  Card content
                </Card></Col>
                <Col span={4}><Card title="Card title" bordered={true}>
                  Card content
                </Card></Col>
                <Col span={4}><Card title="Card title" bordered={true}>
                  Card content
                </Card></Col>
              </Row>
            </div>
            <div className='bottom-layout'>
              <p>Số lượng: 12 vé</p>
              <p>Trang 1/3</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default PaymentsSucess;
