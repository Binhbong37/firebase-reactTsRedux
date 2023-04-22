import { useEffect } from 'react'
import './App.css'

import User from "./components/pages/users";
import { useAction } from './helpers/useAction';
import RootCp from './components/useCBandMemon/RootCp';

function App() {
  const { fetchData } = useAction()

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
