import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import EventDetail from './pages/EventPage/EventDetail';
import ContactPage from './pages/ContactPage';
import Payments from './pages/Payments';
import PaymentsSucess from './pages/Payments/PaymentsSucess';
import E404Page from './components/E404Page';
import { useAppDispatch } from './helpers/UseTypeRedux';
import { useEffect } from 'react';
import { fetchUsers } from './store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/event/:id' element={<EventDetail />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/payment' element={<Payments />} />
        <Route path='/paymentsuccess' element={<PaymentsSucess />} />
        <Route path='*' element={<E404Page />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
