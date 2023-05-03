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
  return (
    <div className='wrapper'>
      <h2 className='title-page' style={{ textAlign: "center" }}>Thanh toán</h2>
      <div className="home-content">
        <div className="home-content__left">
          <h3 className="home-content__left-title">VÉ CỔNG - {userIdObj?.loaiVe === "caNhan" ? "VÉ CÁ NHÂN" : "VÉ GIA ĐÌNH"}</h3>
          <Form className='form-payment'>
            <Row>
              <Col span={8}>
                <Form.Item label="Số tiền thanh toán">
                  <Input value={(soLuong && soLuong * 50000) || ''} style={{ width: "100%" }} disabled />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số lượng vé">
                  <Input value={soLuong || ''} disabled />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Ngày sử dụng">
                  <Input value={"01/06/2023"} style={{ width: "100%" }} disabled />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Thông tin liên hệ">
              <Input value={hoTen || ''} disabled />
            </Form.Item>
            <Form.Item label="Số điện thoại">
              <Input value={phone || ""} disabled />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={email || ''} disabled />
            </Form.Item>
          </Form>
        </div>
        <div className="home-content__right">
          <h3 className="home-contents__right-title">THÔNG TIN THANH TOÁN</h3>
          <Form className="home-content__right-form rest-form">
            <Form.Item label="Số thẻ">
              <InputNumber value={"123 456 789"} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Họ tên chủ thẻ">
              <Input value={"chu the"} />
            </Form.Item>
            <Form.Item label="Ngày hết hạn">
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="CGV/CCV"
            >
              <Input value={"..."} />
            </Form.Item>

            <Button className="btn btn-ticket"
              disabled
            >Thanh toán</Button>
          </Form>
        </div>

      </div>
    </div>
  )
}

export default Payments