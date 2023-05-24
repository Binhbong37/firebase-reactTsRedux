import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardItem from '../../components/CardItems';
import PreviousArrow from '../../components/Icons/PreviousArrow';
import NextArrow from '../../components/Icons/NextArrow';
import { SmootHorizonScolling } from '../../helpers/scrollPage';


type Numb = {
  num: string
}

const PaymentsSucess: React.FC = () => {
  const [num, setNum] = useState({} as Numb);
  const slider = useRef<any>();
  const card = useRef<any>();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      return navigate('/')
    }

    const soLuong = location.state

    setNum({
      ...num,
      num: soLuong
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const previousArrow = () => {
    console.log("previos")
  }

  const nextArrow = () => {
    const sroollW = (slider.current.scrollWidth);
    const cilentW = (slider.current.clientWidth);
    const scrollLeft = slider.current.scrollLeft;
    const maxScroll = sroollW - cilentW
    if (scrollLeft < maxScroll) {
      SmootHorizonScolling(slider.current, 50, card.current.clientWidth, slider.current.scrollLeft)
    }

  }

  return (
    <div className='container-paymentSucee'>
      {Number(num.num) > 3 &&
        <>
          <div className='previousIcon'
            onClick={previousArrow}
          >
            <PreviousArrow />
          </div>
          <div className='nextIcon'
            onClick={nextArrow}
          >
            <NextArrow />
          </div>
        </>
      }
      <div className='container-paymentSucee__main'>
        <div className='container-paymentSucee__main-card'
          ref={slider}
        >


          {[...Array(Number(num.num))].map((_, i) => {
            return (
              <div className='card' key={i} ref={card}>
                <CardItem />
              </div>
            )
          })}

        </div>
        <div className='container-paymentSucee__main-bottom'>
          <p>Số lượng: {num.num} vé</p>
          {Number(num.num) > 3 && <p>Trang 1/1</p>}
        </div>
      </div>
      <div className='container-paymentSucee__bottom'>
        <button>Tải về</button>
        <button>Gửi Email</button>
      </div>
    </div>
  )
}

export default PaymentsSucess;
