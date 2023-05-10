import React from 'react';
import imgEvent from '../../public/imgs/eventImg.png';
import SmallCalendar from '../Icons/SmallCalendar';
import Button from '../Button';
import { Link } from 'react-router-dom';

const CardEvent: React.FC = () => {
  return (
    <div className='card-event'>
      <img src={imgEvent} alt="EventImg" />
      <div className='card-envent_bottom'>
        <h2>Sự kiện 1</h2>
        <p>Đầm sen Park</p>
        <div className='calendar-desc'>
          <SmallCalendar />
          <p className="desc">30/05/2021 - 01/06/2021</p>
        </div>

        <p className='price'>250.000 VNĐ</p>
        <Link to={'/event/:event1'}>
          <Button>Xem chi tiết</Button>
        </Link>
      </div>
    </div>
  )
}

export default CardEvent