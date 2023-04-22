import { useState, useEffect } from 'react';

import MuatationRef from './components/useRef/MuatationRef';

import { userCollecion } from './firebase/controller';
import { DocumentData, QuerySnapshot, onSnapshot } from 'firebase/firestore';
import { NewUsersType } from './type/users.type';
function App() {
  const [users, setUsers] = useState<NewUsersType[]>([])

  useEffect(() => {
    onSnapshot(userCollecion, (snapshot: QuerySnapshot<DocumentData>) => {
      const fetchUser = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setUsers(fetchUser)
    })
  }, [])

  console.log(users)
  return (
    <div className="App">
      <h1>List User</h1>
      <ul>
        {users && users.length > 0 && users.map((user) => {
          return <li key={user.id}>{user.lName}</li>
        })}
      </ul>

      <MuatationRef />
    </div>
  );
}

export default App;
