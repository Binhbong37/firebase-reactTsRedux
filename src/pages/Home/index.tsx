import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../helpers/UseTypeRedux";
import WrapperDasboard from "../../components/WrapperDas";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Col, Row
} from 'antd';
import damsen from '../../public/imgs/damsen.png';
import { NewUsersType } from "../../type/users.type";
import { addUser } from "../../store";
import AroundBox from "../../components/AroundBox";

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleFormValue = (values: any): void => {
    if (values.outOfDate === false) {
      return
    }

    const newUser = {
      soLuong: values.soLuong,
      phone: values.phone,
      hoTen: values.hoTen,
      email: values.email,
      loaiVe: values.loaiVe,
      ngaySuDung: "23/03/2023"

    } as NewUsersType
    dispatch(addUser(newUser))
    navigate('/payment')
  }
  return (
    // <div className="wrapper">
    //   <div className="img-title">
    //     <img src={damsen} alt="img" />
    //     <h2 className="title-page">ĐẦM SEN <br /> PARK</h2>

    //   </div>
    //   <div className="home-content">
    //     <div className="home-content__left">
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. <br />
    //         <br />
    //         Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
    //     </div>
    //     <div className="home-content__right">
    //       <h3 className="home-contents__right-title">VÉ CỦA BẠN</h3>
    //       <Form className="home-content__right-form"
    //         onFinish={(values) => {
    //           handleFormValue(values)
    //         }}
    //         onFinishFailed={(err) => {
    //           handleFormValue(err)
    //         }}
    //       >
    //         <Form.Item label="" name={'loaiVe'}
    //           rules={[{
    //             required: true,
    //             message: 'Chọn vé của bạn'
    //           }]}
    //         >
    //           <Select placeholder="Chọn loại vé.">
    //             <Select.Option value="giaDinh">Gói gia đình</Select.Option>
    //             <Select.Option value="caNhan">Gói cá nhân</Select.Option>
    //           </Select>
    //         </Form.Item>
    //         {/* so luong ve */}
    //         <Row>
    //           <Col span={12}>
    //             <Form.Item label="" name={"soLuong"}
    //               rules={[{
    //                 required: true,
    //                 message: 'Chọn số lượng vé'
    //               }]}
    //             >
    //               <InputNumber placeholder="Số lượng vé" style={{ width: "100%" }} />
    //             </Form.Item>
    //           </Col>
    //           <Col span={12}>
    //             <Form.Item label="" name={"ngaySuDung"}
    //               rules={[{
    //                 required: true,
    //                 message: 'Chọn ngày sử dụng'
    //               }]}
    //             >
    //               <DatePicker placeholder="Ngày sử dụng" />
    //             </Form.Item>
    //           </Col>
    //         </Row>

    //         <Form.Item label="" name={"hoTen"}
    //           rules={[{
    //             required: true,
    //             message: 'Nhập Họ tên'
    //           }]}
    //         >
    //           <Input placeholder="Họ và tên" />
    //         </Form.Item>

    //         <Form.Item
    //           name="phone"
    //           label=""
    //           rules={[{
    //             required: true,
    //             message: 'Nhập số điện thoại'
    //           },
    //           ]}
    //         >
    //           <InputNumber placeholder="Nhập số điện thoại" style={{ width: '100%' }} />
    //         </Form.Item>

    //         <Form.Item
    //           name="email"
    //           label=""
    //           rules={[
    //             {
    //               required: true,
    //               message: 'Nhập email'
    //             },
    //             { type: "email" }
    //           ]}
    //         >
    //           <Input placeholder="Nhập địa chỉ email" />
    //         </Form.Item>

    //         <Button className="btn btn-ticket" htmlType="submit">Đặt vé</Button>

    //       </Form>
    //     </div>

    //   </div>
    // </div>

    <WrapperDasboard>
      <div className="wrapper">
        <div className="img-title">
          <img src={damsen} alt="img" />
          <h2 className="title-page">ĐẦM SEN <br /> PARK</h2>
        </div>
        <div className="">
          <AroundBox style={{ width: "60%" }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. <br />
              <br />
              Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
          </AroundBox>
        </div>
      </div>
    </WrapperDasboard>
  )
}

export default Home