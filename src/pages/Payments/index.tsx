import React, { useEffect } from 'react'
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Col, Row
} from 'antd';

import { useAppSelector, useAppDispatch } from '../../helpers/UseTypeRedux';
import { fetchUserId } from '../../store';
import { useNavigate } from 'react-router-dom';
import AroundBox from '../../components/AroundBox';
import CartTitle from '../../components/Carttitle';
import FormHome from '../../components/Form/FormHome';
// import { NewUsersType } from '../../type/users.type';
import circle from '../../public/imgs/circle.png'


const Payments: React.FC = () => {
  // const [user, setUser] = useState<NewUsersType>({})
  const dispatch = useAppDispatch()
  const { userId, userIdObj } = useAppSelector(state => state.userSlice)


  useEffect(() => {
    if (!userId) return;
    dispatch(fetchUserId(userId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, dispatch])

  const { soLuong, email, hoTen, phone } = userIdObj;

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
            Vé cổng - Vé gia đình
          </CartTitle>
          <form className='form-group'>
            <div className='form-control'>
              <label>Số tiền thanh toán</label>
              <input type="text" />
            </div>
            <div className='form-control'>
              <label>Số lượng vé</label>
              <input type="text" />
            </div>
            <div className='form-control'>
              <label>Ngày sử dụng</label>
              <input type="text" />
            </div>
          </form>
        </AroundBox>
        <img src={circle} alt="circle" />
        <AroundBox style={{ width: "539px" }}>
          <CartTitle style={{ width: "388px" }}>
            Vé của bạn
          </CartTitle>

        </AroundBox>
      </div>
    </div>
  )
}

export default Payments