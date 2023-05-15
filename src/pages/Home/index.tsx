import React from "react";
import circle from '../../public/imgs/circle.png'
import AroundBox from "../../components/AroundBox";
import Star from "../../components/Icons/Star";
import CartTitle from "../../components/Carttitle";
import FormHome from "../../components/Form/FormHome";
import Lisa from '../../public/imgs/Lisa.png'

const Home: React.FC = () => {

  return (
    <div className="home-container">
      <div className="home-container__main">
        <AroundBox style={{ width: "950px" }}>
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
        <AroundBox style={{ width: "540px" }}>
          <CartTitle style={{ width: "280px" }}>
            Vé của bạn
          </CartTitle>
          <FormHome />
        </AroundBox>
      </div>
      <div className="lisa">
        <img src={Lisa} alt="LisaImg" />
      </div>
    </div>
  )
}

export default Home