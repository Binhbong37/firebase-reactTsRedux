import React, { useEffect, useState } from 'react'
import FormPaymentRight from '../../components/Form/FormPaymentRight';
import AroundBox from '../../components/AroundBox';
import CartTitle from '../../components/Carttitle';
import circle from '../../public/imgs/circle.png'
import FormPaymentLeft from '../../components/Form/FormPaymentLeft';
import { useLocation, useNavigate } from 'react-router-dom';
import { NewUsersType } from '../../type/users.type';

const Payments: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [user, setUser] = useState({} as NewUsersType);

  useEffect(() => {
    if (!location.state) {
      return navigate('/')
    }

    const { email, phone, hoTen, ngaySuDung, soLuong } = location.state

    setUser({
      email, phone, hoTen, ngaySuDung, soLuong
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='container-payment'>
      <div className='container-payment__main'>
        <AroundBox style={{ width: "950px" }}>
          <CartTitle style={{ width: "388px" }}>
            Vé cổng - {user.loaiVe === 'caNhan' ? "Vé Cá Nhân" : "Vé gia đình"}
          </CartTitle>
          <FormPaymentLeft
            email={user.email || ''}
            phone={user.phone || ''}
            soLuong={user.soLuong || ''}
            hoTen={user.hoTen || ''}
            ngaySuDung={user.ngaySuDung || ''}

          />
        </AroundBox>
        <img src={circle} alt="circle" />
        <AroundBox style={{ width: "539px" }}>
          <CartTitle style={{ width: "388px" }}>
            Thông tin thanh toán
          </CartTitle>
          <FormPaymentRight
            email={user.email || ''}
            phone={user.phone || ''}
            soLuong={user.soLuong || ''}
            hoTen={user.hoTen || ''}
            ngaySuDung={user.ngaySuDung || ''}
            loaiVe={user.loaiVe || ''}
          />

        </AroundBox>
      </div>
    </div>
  )
}

export default Payments