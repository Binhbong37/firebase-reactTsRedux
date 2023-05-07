import React from 'react';

import CardItem from '../../components/CardItems';



const PaymentsSucess: React.FC = () => {
  return (
    <div className='container-paymentSucee'>
      <div className='container-paymentSucee__main'>
        <div className='container-paymentSucee__main-card'>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className='container-paymentSucee__main-bottom'>
          <p>Số lượng: 12 vé</p>
          <p>Trang 1/3</p>
        </div>
      </div>
      <div className='container-paymentSucee__bottom'>
        <button>Tải về</button>
        <button>Gửi Email</button>
      </div>
    </div>
  )
}

export default PaymentsSucess;
