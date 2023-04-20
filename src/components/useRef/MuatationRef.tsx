import { useRef, useState } from 'react';
import { Button } from 'antd';

const MuatationRef = () => {
  const [count, setCount] = useState(0);
  const refTime = useRef<number | null>(null);

  const handleStart = () => {

    refTime.current = window.setInterval(() => {
      setCount(pre => pre + 1)
    }, 1000)
  }

  const handleStop = (): void => {
    if (refTime.current) window.clearInterval(refTime.current)
  }
  return (
    <div>
      <h2>{count}</h2>
      <Button type='primary'
        onClick={handleStart}
      >Start</Button>
      <Button danger
        onClick={handleStop}
      >Stop</Button>
    </div>
  )
}

export default MuatationRef