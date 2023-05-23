import React, { useRef } from "react";
import PreviousArrow from "../../components/Icons/PreviousArrow";
import NextArrow from "../../components/Icons/NextArrow";
import CardEvent from "../../components/CardItems/CardEvent";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper as SwiperType, Navigation } from "swiper";

const EVENT = 6
const EventPage: React.FC = () => {

  const swiperRef = useRef<SwiperType>();


  const previousArrow = () => {
    swiperRef.current?.slidePrev()
    console.log("previos")
  }

  const nextArrow = () => {
    swiperRef.current?.slideNext()
    console.log("next")
  }
  return (
    <div className="container-events">
      <div className="container-events__main">
        {EVENT > 3
          && (
            <>
              <div className="leftArrow"
                onClick={previousArrow}
              >
                <PreviousArrow />
              </div>
              <div className="rightArrow"
                onClick={nextArrow}
              >
                <NextArrow />
              </div>
            </>
          )
        }

        <div className="container-events__main-card">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {
              [...Array(Number(EVENT))].map((_, i) => {
                return (
                  <SwiperSlide key={i}>
                    <CardEvent numEvent={`${i + 1}`} totalEvent={EVENT} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  )
}



export default EventPage