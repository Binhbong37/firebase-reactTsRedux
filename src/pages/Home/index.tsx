import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../helpers/UseTypeRedux";
import circle from '../../public/imgs/circle.png'
import { NewUsersType } from "../../type/users.type";
import { addUser } from "../../store";
import AroundBox from "../../components/AroundBox";
import Star from "../../components/Icons/Star";
import CartTitle from "../../components/Carttitle";
import FormHome from "../../components/Form/FormHome";

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
    <div className="home-container">
      <div className="home-container__main">
        <AroundBox style={{ width: "55%" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere ex facilisis. <br />
            <br />
            Suspendisse iaculis libero lobortis condimentum gravida. Aenean auctor iaculis risus, lobortis molestie lectus consequat a.</p>
          <div className="star-text">
            <p><Star /></p>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
          </div>
          <div className="star-text">
            <p><Star /></p>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
          </div>
          <div className="star-text">
            <p><Star /></p>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
          </div>
          <div className="star-text">
            <p><Star /></p>
            <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
          </div>
        </AroundBox>
        <img src={circle} alt="circle" />
        <AroundBox style={{ width: "30%" }}>
          <CartTitle style={{ width: "280px" }}>
            Vé của bạn
          </CartTitle>
          <FormHome />

        </AroundBox>
      </div>
    </div>
  )
}

export default Home