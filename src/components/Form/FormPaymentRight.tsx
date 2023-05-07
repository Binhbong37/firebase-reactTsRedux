import React from 'react'
import Button from '../Button'

const FormPaymentRight: React.FC = () => {
  return (
    <form className='form-group'>
      <div className='form-control'>
        <label htmlFor="">Số thẻ</label>
        <input type="text" />
      </div>
      <div className='form-control'>
        <label htmlFor="">Họ tên chủ thẻ</label>
        <input type="text" />
      </div>
      <div className='form-control'>
        <label htmlFor="">Ngày hết hạn</label>
        <input type="text" />
      </div>
      <div className='form-control'>
        <label htmlFor="">CVV/CGV</label>
        <input type="text" value={'...'} />
      </div>

      <Button style={{ width: "368px" }}>
        Thanh toán
      </Button>
    </form>
  )
}

export default FormPaymentRight