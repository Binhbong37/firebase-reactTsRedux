import React from 'react';
import { Row } from 'antd';
import CardItem from '../../components/CardItems';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

const PaymentsSucess: React.FC = () => {
  return (
    <>
      <div className='wrapper'>
        <h2 className='title-page' style={{ textAlign: 'center' }}>Thanh toán thành công</h2>
        <div className="payment">
          <div className="payment-center">
            <div className='icon-left'>
              <CaretLeftOutlined />

            </div>
            <div className='icon-right'>
              <CaretRightOutlined />
            </div>

            <div className='grid'>
              <Row justify="space-evenly">
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </Row>
            </div>
            <div className='bottom-layout'>
              <p>Số lượng: 12 vé</p>
              <p>Trang 1/3</p>
            </div>
          </div>
        </div>

        <div className='bottom-btn'>
          <button className=''>Tải về</button>
          <button className=''>Gửi email</button>
        </div>

      </div>

    </>
  )
}

export default PaymentsSucess;
