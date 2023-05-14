import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardItem from '../../components/CardItems';
import PreviousArrow from '../../components/Icons/PreviousArrow';
import NextArrow from '../../components/Icons/NextArrow';

type Numb = {
  num: string
}

const PaymentsSucess: React.FC = () => {
  const [num, setNum] = useState({} as Numb)

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      return navigate('/')
    }

    const soLuong = location.state

    setNum({
      ...num,
      num: soLuong
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='container-paymentSucee'>
      <div className='previousIcon'>
        <PreviousArrow />
      </div>
      <div className='nextIcon'>
        <NextArrow />
      </div>
      <div className='container-paymentSucee__main'>
        <div className='container-paymentSucee__main-card'>
          {/* {num && num.num &&
            [...Array(Number(num.num))].map((_, i) => <CardItem key={i} />)
          } */}
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
        <div className='container-paymentSucee__main-bottom'>
          <p>Số lượng: {num.num} vé</p>
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
