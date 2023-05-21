import React from "react";
import PreviousArrow from "../../components/Icons/PreviousArrow";
import NextArrow from "../../components/Icons/NextArrow";
import CardEvent from "../../components/CardItems/CardEvent";

const EVENT = 4
const EventPage: React.FC = () => {

  const previousArrow = () => {
    console.log("previos")
  }

  const nextArrow = () => {
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
          {
            [...Array(Number(EVENT))].map((_, i) => <CardEvent key={i} numEvent={`${i + 1}`} totalEvent={EVENT} />)
          }
        </div>
      </div>
    </div>
  )
}



export default EventPage