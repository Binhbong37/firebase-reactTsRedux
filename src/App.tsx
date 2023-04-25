import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home';
import EventPage from './pages/EventPage';
import ContactPage from './pages/ContactPage';
import E404Page from './components/E404Page';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/event' element={<EventPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<E404Page />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
