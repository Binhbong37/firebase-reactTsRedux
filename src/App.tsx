import './App.css';
import ListUser from './components/ListUser';

function App() {

  const listUser = [
    { id: 1, lName: 'Binh', age: 27 },
    { id: 2, lName: 'Binh1', age: 26 },
    { id: 3, lName: 'Binh2', age: 25 },
    { id: 4, lName: 'Binh3', age: 24 },
    { id: 5, lName: 'Binh4', age: 23 },
    { id: 6, lName: 'Binh5', age: 22 },
  ]

  return (
    <div className="App">
      <h1>List User</h1>
      <ul>
        <ListUser listUser={listUser} />
      </ul>
    </div>
  );
}

export default App;
