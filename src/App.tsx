import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from "./components/pages/users";
import AddUser from './components/pages/users/AddUser';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<User />} />
        <Route path='/addUser' element={<AddUser />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
