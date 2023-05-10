import React from "react";
import PreviousArrow from "../../components/Icons/PreviousArrow";
import NextArrow from "../../components/Icons/NextArrow";
import CardEvent from "../../components/CardItems/CardEvent";

const EventPage: React.FC = () => {
  return (
    <div className="container-events">
      <div className="container-events__main">
        <div className="leftArrow">
          <PreviousArrow />
        </div>
        <div className="rightArrow">
          <NextArrow />
        </div>
        <div className="container-events__main-card">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </div>
    </div>
  )
}

export default EventPage