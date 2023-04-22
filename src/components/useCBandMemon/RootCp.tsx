import { useState, useCallback } from "react"
import Memoo from "./Memoo"


const RootCp = () => {
  const [count, setCount] = useState(0);

  const increaCount = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])
  return (
    <div>

      <h2>{count}</h2>
      <Memoo onIncrease={increaCount} />
    </div>
  )
}

export default RootCp