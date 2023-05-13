import React from 'react';
import { useLocation } from 'react-router-dom';

const FormPaymentLeft: React.FC = () => {
  const location = useLocation();
  const { email, hoTen, phone, soLuong, ngaySuDung } = location.state;
  return (
    <form className='form-group'>
      <div className='line-1'>
        <div className='form-control'>
          <label>Số tiền thanh toán</label>
          <input type="text" value={`${Number(soLuong) * 40000} VNĐ`} readOnly />
        </div>
        <div className='form-control'>
          <label>Số lượng vé</label>
          <input type="text" value={soLuong} readOnly />
        </div>
        <div className='form-control'>
          <label>Ngày sử dụng</label>
          <input type="text" value={ngaySuDung} readOnly />
        </div>
      </div>
      <div className='form-control'>
        <label>Thông tin liên hệ</label>
        <input type="text" value={hoTen} readOnly />
      </div>
      <div className='form-control'>
        <label>Điện thoại</label>
        <input type="text" value={phone} readOnly />
      </div>
      <div className='form-control'>
        <label>Email</label>
        <input type="text" value={email} readOnly />
      </div>
    </form>
  )
}

export default FormPaymentLeft