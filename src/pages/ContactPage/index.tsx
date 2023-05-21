import React, { useState } from "react";
import AroundBox from "../../components/AroundBox";
import Button from "../../components/Button";
import Address from "../../components/Icons/Address";
import Email from "../../components/Icons/Email";
import Phone from "../../components/Icons/Phone";
import { CloseOutlined } from "@ant-design/icons";
import { Modal } from 'antd';
import { Input, Form } from 'antd';
import Alex from '../../public/imgs/Alex.png'

const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const valueContact = (data: any) => {
    if (data.outOfDate === false) {
      return;
    }
    console.log(data)
  }

  const resetForm = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="container-contact">
      <div className="container-contact__main">
        <AroundBox style={{ width: "950px" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse ac mollis justo. Etiam volutpat
            tellus quis risus volutpat, ut posuere ex facilisis.
          </p>
          <Form
            autoComplete="off"
            onFinish={(values) => {
              valueContact(values);
              setIsModalOpen(true);

            }}
            onFinishFailed={(err) => {
              valueContact(err)
            }}
          >
            <div className="group-1">
              <Form.Item style={{ width: '40%' }}
                name={'name'}
                rules={[
                  {
                    required: true,
                    message: 'Điền tên của bạn.'
                  },
                  { whitespace: true }
                ]}
              >
                <Input className="input" placeholder="Tên"
                />
              </Form.Item>
              <Form.Item style={{ width: '60%' }}
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: 'Điền email của bạn.'
                  },
                  { type: 'email', message: 'Chưa đúng dạng email' }
                ]}
              >
                <Input className="input" placeholder="email"
                />
              </Form.Item>
            </div>
            <div className="group-1">
              <Form.Item style={{ width: '40%' }}
                name={'phone'}
                rules={[
                  {
                    required: true,
                    message: 'Điền số điện thoại của bạn.'
                  }
                ]}
              >
                <Input className="input" placeholder="Số điện thoại" />
              </Form.Item>

              <Form.Item style={{ width: '60%' }}
                name={'address'}
                rules={[
                  {
                    required: true,
                    message: 'Điền địa chỉ của bạn.'
                  }
                ]}
              >
                <Input className="input" placeholder="Địa chỉ" />
              </Form.Item>
            </div>
            <div className="group-1">
              <Form.Item style={{ width: '100%' }}
                name={'message'}
                rules={[
                  {
                    required: true,
                    message: 'Điền nội dung gửi.'
                  }
                ]}
              >
                <Input.TextArea className="input" placeholder="Lời nhắn"
                  rows={5}
                ></Input.TextArea>
              </Form.Item>
            </div>
            <Button style={{ width: "368px" }}>Gửi liên hệ</Button>
          </Form>
        </AroundBox>

        <div className="contact-left">
          <AroundBox>
            <div className="contact-address">
              <Address />
              <div className="text">
                <h2>Địa chỉ: </h2>
                <p>86/33 Âu Cơ, Phường 9, Quận Tân Bình,<br />TP. Hồ Chí Minh</p>
              </div>
            </div>
          </AroundBox>
          <AroundBox>
            <div className="contact-address">
              <Email />
              <div className="text">
                <h2>Email:</h2>
                <p>investigate@your-site.com</p>
              </div>
            </div>
          </AroundBox>
          <AroundBox>
            <div className="contact-address">
              <Phone />
              <div className="text">
                <h2>Điện thoại:</h2>
                <p>+84 145 689 798</p>
              </div>
            </div>
          </AroundBox>
        </div>
      </div>

      <div className="alex">
        <img src={Alex} alt="alexImg" />
      </div>
      <Modal open={isModalOpen}
        closeIcon={<CloseOutlined style={{ color: "orange" }} />}
        centered={true}
        onCancel={() => resetForm()}
        footer={null}

      >
        <p>Gửi liên hệ thành công <br />
          Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!
        </p>
      </Modal>
    </div>
  )
}

export default ContactPage