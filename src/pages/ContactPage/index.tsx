import React, { useState } from "react";
import AroundBox from "../../components/AroundBox";
import Button from "../../components/Button";
import Address from "../../components/Icons/Address";
import Email from "../../components/Icons/Email";
import Phone from "../../components/Icons/Phone";
import { CloseOutlined } from "@ant-design/icons";
import { Modal } from 'antd';

type ContactForm = {
  name: string,
  email: string,
  phone: string,
  address: string,
  message: string
}


const ContactPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contact, setContact] = useState({} as ContactForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value
    })
  }
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { phone, name, email, message, address } = contact;
    if (!phone || !name || !email || !message || !address) {
      return window.alert('Điền hết các ô')
    }
    console.log(contact)
    setIsModalOpen(true)
  }

  const resetForm = () => {
    setIsModalOpen(false)
    setContact({
      name: '',
      phone: "",
      address: "",
      message: "",
      email: ""
    })
  }
  return (
    <div className="container-contact">
      <div className="container-contact__main">
        <AroundBox style={{ width: "950px" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse ac mollis justo. Etiam volutpat
            tellus quis risus volutpat, ut posuere ex facilisis.
          </p>
          <form onSubmit={handleSubmitForm}>
            <div className="group-1">
              <input type="text" name="name" placeholder="name"
                value={contact.name || ''}
                onChange={handleChange}
              />
              <input type="email" name="email" placeholder="email"
                value={contact.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className="group-1">
              <input type="phone" name="phone" placeholder="Số điện thoại"
                value={contact.phone || ''}
                onChange={handleChange}
              />
              <input type="text" name="address" placeholder="Địa chỉ"
                value={contact.address || ''}
                onChange={handleChange}
              />
            </div>
            <div className="group-1">
              <textarea name="message" placeholder="Lời nhắn"
                rows={5}
                value={contact.message || ''}
                onChange={handleChange}
              ></textarea>
            </div>
            <Button style={{ width: "368px", marginTop: "4rem" }}>Gửi liên hệ</Button>
          </form>
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
      <Modal open={isModalOpen}
        closeIcon={<CloseOutlined style={{ color: "orange" }} />}
        centered={true}
        onCancel={() => resetForm()}
        footer={null}
        width={'472px'}
      >
        <p>Gửi liên hệ thành công <br />
          Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!
        </p>
      </Modal>
    </div>
  )
}

export default ContactPage