import { useState } from "react";
import { Button } from "antd";
type AuthUser = {
  name: string,
  age: number
}
const User = () => {

  // const [user, setUser] = useState<AuthUser | null>(null)

  const [user, setUser] = useState<AuthUser>({} as AuthUser)
  // type assertion

  const handleLogin = (): void => {
    setUser({
      name: "Binh",
      age: 25
    })
  }
  return (
    <div>
      <Button color="primary"
        onClick={handleLogin}
      >Login</Button>
      <h2>{user.name}</h2>
    </div>
  )
}

export default User