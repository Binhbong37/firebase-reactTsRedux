import React from 'react';
import Button from '../Button';
import Calender from '../Icons/Calender';
import BottomAround from '../Icons/BottomAroud';
import { Col, Row } from 'antd';

const FormHome: React.FC = () => {
  return (
    <form className='form-home' style={{ marginTop: "1rem" }}>
      <Row>
        <Col flex={4}>
          <select name="loaiVe">
            <option value="giaDinh">Gói gia đình</option>
            <option value="caNhan">Gói cá nhân</option>
          </select>
        </Col>
        <Col flex={1}><BottomAround /></Col>
      </Row>

      <Row>
        <Col span={12}>
          <input
            placeholder="Số lượng vé"
            type="number"
            name="number"
          />
        </Col>
        <Col span={12}>
          <Row>
            <Col flex={4}>
              <input
                placeholder="Ngày sử dụng"
                type="text"
                name="date"
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                min={new Date().toISOString().split("T")[0]}
              />
            </Col>
            <Col flex={1}>
              <Calender />
            </Col>
          </Row>
        </Col>
      </Row>





      <Button>
        Đặt vé
      </Button>
    </form>
  )
}

export default FormHome