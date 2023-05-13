import React from 'react'
import FormPaymentRight from '../../components/Form/FormPaymentRight';
import AroundBox from '../../components/AroundBox';
import CartTitle from '../../components/Carttitle';
import circle from '../../public/imgs/circle.png'
import FormPaymentLeft from '../../components/Form/FormPaymentLeft';
import { useLocation } from 'react-router-dom';

const Payments: React.FC = () => {
  const location = useLocation();
  const { loaiVe } = location.state;

  return (
    <div className='container-payment'>
      <div className='container-payment__main'>
        <AroundBox style={{ width: "950px" }}>
          <CartTitle style={{ width: "388px" }}>
            Vé cổng - {loaiVe === 'caNhan' ? "Vé Cá Nhân" : "Vé gia đình"}
          </CartTitle>
          <FormPaymentLeft />
        </AroundBox>
        <img src={circle} alt="circle" />
        <AroundBox style={{ width: "539px" }}>
          <CartTitle style={{ width: "388px" }}>
            Thông tin thanh toán
          </CartTitle>
          <FormPaymentRight />

        </AroundBox>
      </div>
    </div>
  )
}

export default Payments