import React from 'react';

import qr from '../../public/imgs/QR.png';
import Check from '../Icons/Check';



const CardItem: React.FC = () => {
  return (
    <>
      <img src={qr} alt='qrcode' />
      <h2>ALT20210501</h2>
      <p className='port-ticket'>VÉ CỔNG</p>
      <p>---</p>
      <p className='dateUse'>Ngày sử dụng: 31/05/2021</p>
      <div className='checkIcon'>
        <Check />
      </div>
    </>

  )
}

export default CardItem