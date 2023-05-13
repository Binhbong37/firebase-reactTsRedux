import React, { useState } from 'react';
import Button from '../Button';
import Calender from '../Icons/Calender';
import BottomAround from '../Icons/BottomAroud';
import { useNavigate } from 'react-router-dom';
import { NewUsersType } from '../../type/users.type';

const FormHome: React.FC = () => {
  const navigate = useNavigate();
  const [valueForm, setValueForm] = useState<NewUsersType>({})

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setValueForm({
      ...valueForm,
      [name]: value
    })

  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { hoTen, soLuong, email, loaiVe, phone, ngaySuDung } = valueForm;

    if (!hoTen || !soLuong || !email || !phone || !ngaySuDung) {
      return window.alert('Cung cấp hết dữ liệu vào các ô')
    }

    const newTicket = {
      hoTen, soLuong, email, loaiVe: loaiVe || "giaDinh", phone, ngaySuDung
    }

    navigate('/payment', { state: newTicket })
  }
  return (
    <form className='form-home' style={{ marginTop: "1rem" }}
      onSubmit={handleSubmitForm}
    >
      <div className='calendar'>
        <select name="loaiVe"
          value={valueForm.loaiVe}
          onChange={handleChangeForm}
        >
          <option value="giaDinh">Gói gia đình</option>
          <option value="caNhan">Gói cá nhân</option>
        </select>
        <BottomAround />
      </div>
      <div className='group-2'>
        <input
          style={{ width: "40%" }}
          placeholder="Số lượng vé"
          type="number"
          name="soLuong"
          value={valueForm.soLuong || ''}
          onChange={handleChangeForm}
        />
        <div className='datePick'>
          <input
            placeholder="Ngày sử dụng"
            type="text"
            name="ngaySuDung"
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
            min={new Date().toISOString().split("T")[0]}
            value={valueForm.ngaySuDung || ''}
            onChange={handleChangeForm}
          />
          <Calender />
        </div>
      </div>

      <input
        placeholder="Họ và tên"
        type="text"
        name="hoTen"
        value={valueForm.hoTen || ''}
        onChange={handleChangeForm}
      />
      <input
        placeholder="Số điện thoại"
        type="text"
        name="phone"
        value={valueForm.phone || ''}
        onChange={handleChangeForm}
      />
      <input
        placeholder="Địa chỉ email"
        type="text"
        name="email"
        value={valueForm.email || ''}
        onChange={handleChangeForm}
      />

      <Button style={{ width: "300px" }}>
        Đặt vé
      </Button>
    </form>
  )
}

export default FormHome