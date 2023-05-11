import React from "react";
import AroundBox from "../../components/AroundBox";
import Button from "../../components/Button";
import Address from "../../components/Icons/Address";
import Email from "../../components/Icons/Email";
import Phone from "../../components/Icons/Phone";

const ContactPage: React.FC = () => {
  return (
    <div className="container-contact">
      <div className="container-contact__main">
        <AroundBox style={{ width: "950px" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse ac mollis justo. Etiam volutpat
            tellus quis risus volutpat, ut posuere ex facilisis.
          </p>
          <form>
            <div className="group-1">
              <input type="text" name="name" placeholder="name" />
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="group-1">
              <input type="phone" name="phone" placeholder="Số điện thoại" />
              <input type="text" name="address" placeholder="Địa chỉ" />
            </div>
            <div className="group-1">
              <textarea name="message" placeholder="Lời nhắn"
                rows={5}
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
    </div>
  )
}

export default ContactPage