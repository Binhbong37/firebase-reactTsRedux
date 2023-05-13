import React, { useEffect } from 'react'
import FormPaymentRight from '../../components/Form/FormPaymentRight';

import { useAppSelector, useAppDispatch } from '../../helpers/UseTypeRedux';
import { fetchUserId } from '../../store';
import { useNavigate } from 'react-router-dom';
import AroundBox from '../../components/AroundBox';
import CartTitle from '../../components/Carttitle';
import FormHome from '../../components/Form/FormHome';
// import { NewUsersType } from '../../type/users.type';
import circle from '../../public/imgs/circle.png'
import FormPaymentLeft from '../../components/Form/FormPaymentLeft';
import { useLocation } from 'react-router-dom';

const Payments: React.FC = () => {
  const location = useLocation();
  const { loaiVe } = location.state;
  // const [user, setUser] = useState<NewUsersType>({})
  const dispatch = useAppDispatch()
  const { userId } = useAppSelector(state => state.userSlice)


  useEffect(() => {
    if (!userId) return;
    dispatch(fetchUserId(userId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, dispatch])


  const navigate = useNavigate()
  // btn thanh toan
  const handleClick = (value: any) => {
    if (value.outOfDate === false) {
      return;
    }

    navigate('/paymentsuccess')
  }
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