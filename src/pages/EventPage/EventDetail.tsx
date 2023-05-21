import AroundBox from '../../components/AroundBox';
import eventDetail from '../../public/imgs/evenDetailimg.png'
import SmallCalendar from '../../components/Icons/SmallCalendar';
import retange from '../../public/imgs/Rectangle.png'
import { useParams } from 'react-router-dom';
import E404Page from '../../components/E404Page';


const EventDetail = () => {
  const param = useParams();
  const { id } = param;

  if (Number(id) > 4 || isNaN(Number(id))) {
    return <E404Page />
  }

  return (
    <div className='container-eventDetail'>
      <div className='container-eventDetail__main'>
        <h2>Sự kiện {id}</h2>
        <AroundBox style={{ width: "1520px" }}>
          <div className='container-box'>
            <div className='container-box__left'>
              <img src={eventDetail} alt='imgDetail' />
              <div className='calender-dest'>
                <SmallCalendar />
                <p>30/05/2021 - 01/06/2021</p>
              </div>
              <p>Đầm sen Park</p>
              <p className='price'>25.000 VNĐ</p>
            </div>
            <div className='container-box__center'>
              <p><span>Lorem Ipsum</span> is simply
                dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
                It has survived not only five centuries,
                but also the leap into electronic sdsd
                typesetting, remaining cssa essentially
                unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing
                Lorem Ipsum passages, of Lorem Ipsum.</p>
            </div>
            <div className='container-box__center1'>
              <img src={retange} alt='imgDetail' />
              <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, </p>
            </div>
            <div className='container-box__right'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi soluta, est nihil quisquam animi dolore corrupti quae eum aut voluptatem quibusdam modi ipsam ad maxime consectetur dolorem. Necessitatibus, delectus.</p>
              <img src={retange} alt='imagee' />
            </div>
          </div>

        </AroundBox>
      </div>
    </div>
  )
}

export default EventDetail