import React from 'react';
import Button from '../Button';
import Calender from '../Icons/Calender';
import BottomAround from '../Icons/BottomAroud';
import { useNavigate } from 'react-router-dom';

const FormHome: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('Kết quả')
    navigate('/payment')
  }
  return (
    <form className='form-home' style={{ marginTop: "1rem" }}
      onSubmit={handleSubmitForm}
    >
      <div className='calendar'>
        <select name="loaiVe">
          <option value="giaDinh">Gói gia đình</option>
          <option value="caNhan">Gói cá nhân</option>
        </select>
        <BottomAround />
      </div>
      <div className='group-2'>
        <input
          placeholder="Số lượng vé"
          type="number"
          name="soLuong"
        />
        <input
          placeholder="Ngày sử dụng"
          type="text"
          name="ngaySuDung"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
          min={new Date().toISOString().split("T")[0]}
        />
        <Calender />

      </div>

      <input
        placeholder="Họ và tên"
        type="text"
        name="hoTen"
      />
      <input
        placeholder="Số điện thoại"
        type="text"
        name="phone"
      />
      <input
        placeholder="Địa chỉ email"
        type="text"
        name="email"
      />

      <Button style={{ width: "300px" }}>
        Đặt vé
      </Button>
    </form>
  )
}

export default FormHome