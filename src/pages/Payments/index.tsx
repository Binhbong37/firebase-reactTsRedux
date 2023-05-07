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
// import { NewUsersType } from '../../type/users.type';


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

      </div>
    </div>
  )
}

export default Payments