import React, { useEffect, useRef, useState } from 'react';

const listUser = [
  { id: 1, lName: "Binh", age: 25 },
  { id: 2, lName: "Bao", age: 20 },
  { id: 3, lName: "Thuong", age: 24 },
  { id: 4, lName: "Chuyen", age: 26 },
  { id: 5, lName: "Anh", age: 22 },
  { id: 6, lName: "Duyen", age: 27 },
]


interface NameUser {
  age: number,
  lName: string
}

const TestChildFC: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<NameUser>();
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onClick = () => {

    const findName = listUser.find((user) => user.lName.toLocaleLowerCase() === name.toLocaleLowerCase());
    setUser(findName)
    setName('')
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [name])
  return (
    <div>
      <h3>User Search</h3>
      <input type="text" value={name}
        onChange={(e) => setName(e.target.value)}
        name='name'
        ref={inputRef}
      />

      <button
        onClick={onClick}
      >Find</button>

      {user && user.lName}
      {user && user.age}
    </div>
  )
}


export default TestChildFC

