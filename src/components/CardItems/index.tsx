import React from 'react';

import qr from '../../public/imgs/QR.png'



const CardItem: React.FC = () => {
  return (
    <div className='card'>
      <img src={qr} alt='qrcode' />
      <h2>ALT20210501</h2>
    </div>

  )
}

export default CardItem