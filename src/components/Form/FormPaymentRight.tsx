import React, { useState } from 'react'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import Calender from '../Icons/Calender';
import { useAppDispatch } from '../../helpers/UseTypeRedux';
import { addUser } from '../../store';
import { typeProps } from './FormPaymentLeft';


interface ThanhToan {
  soThe: string,
  chuThe: string,
  ngayHetHan: string,
}

const FormPaymentRight = ({ loaiVe, email, hoTen, phone, soLuong, ngaySuDung }: typeProps) => {
  const [card, setCard] = useState({} as ThanhToan);
  const navigate = useNavigate();
  const dispatch = useAppDispatch()


  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCard({
      ...card,
      [name]: value
    })
  }

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const { soThe, chuThe, ngayHetHan } = card

    if (!soThe || !chuThe || !ngayHetHan) {
      return window.alert("Cung cấp hết giá trị")
    }
    const saveInfoData = {
      chuThe, soThe, ngayHetHan,
      soLuong, phone, ngaySuDung, loaiVe, hoTen, email
    }
    dispatch(addUser(saveInfoData))
      .unwrap()
      .then(() => navigate('/paymentsuccess', { state: soLuong }))
      .catch((err) => console.log('K chuyển được route', err))

  }
  return (
    <form className='form-groupR'
      onSubmit={handleSubmitForm}
    >
      <div className='form-control'>
        <label htmlFor="">Số thẻ</label>
        <input type="text" name='soThe'
          value={card.soThe || ''}
          onChange={handleChangeForm}
        />
      </div>
      <div className='form-control'>
        <label htmlFor="">Họ tên chủ thẻ</label>
        <input type="text" name='chuThe'
          value={card.chuThe || ''}
          onChange={handleChangeForm}
        />
      </div>
      <div className='form-control'>
        <label htmlFor="">Ngày hết hạn</label>
        <div className='calendar-date'>
          <input type="date" name='ngayHetHan'
            value={card.ngayHetHan || ''}
            onChange={handleChangeForm}
          />
          <Calender />
        </div>

      </div>
      <div className='form-control'>
        <label htmlFor="">CVV/CGV</label>
        <input type="text" value={'...'} name='typeTic'
          readOnly
        />
      </div>

      <Button style={{ width: "368px" }}>
        Thanh toán
      </Button>
    </form>
  )
}

export default FormPaymentRight