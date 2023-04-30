import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import EventDetail from './pages/EventPage/EventDetail';
import ContactPage from './pages/ContactPage';
import Payments from './pages/Payments';
import PaymentsSucess from './pages/Payments/PaymentsSucess';
import E404Page from './components/E404Page';
import bg_img from './public/imgs/bg.png'
function App() {

  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <div className='bg-logo'>
          <img src={bg_img} alt="bg_img" />
        </div>
        <div className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/event' element={<EventPage />} />
            <Route path='/event/:id' element={<EventDetail />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/payment' element={<Payments />} />
            <Route path='paymentsucess' element={<PaymentsSucess />} />
            <Route path='*' element={<E404Page />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
