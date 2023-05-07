import React from 'react'

const FormPaymentLeft: React.FC = () => {
  return (
    <form className='form-group'>
      <div className='line-1'>
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
      </div>
      <div className='form-control'>
        <label>Thông tin liên hệ</label>
        <input type="text" />
      </div>
      <div className='form-control'>
        <label>Điện thoại</label>
        <input type="text" />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input type="text" />
      </div>
    </form>
  )
}

export default FormPaymentLeft