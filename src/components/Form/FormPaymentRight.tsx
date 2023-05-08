import React from 'react'
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const FormPaymentRight: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Kết quả payment')
    navigate('/paymentsuccess')
  }
  return (
    <form className='form-group'
      onSubmit={handleSubmitForm}
    >
      <div className='form-control'>
        <label htmlFor="">Số thẻ</label>
        <input type="text" name='soThe' value={'123 456 789'} />
      </div>
      <div className='form-control'>
        <label htmlFor="">Họ tên chủ thẻ</label>
        <input type="text" name='chuThe' value={'Hoang Van Binh'} />
      </div>
      <div className='form-control'>
        <label htmlFor="">Ngày hết hạn</label>
        <input type="text" name='date' />
      </div>
      <div className='form-control'>
        <label htmlFor="">CVV/CGV</label>
        <input type="text" value={'...'} name='typeTic' />
      </div>

      <Button style={{ width: "368px" }}>
        Thanh toán
      </Button>
    </form>
  )
}

export default FormPaymentRight