import { useEffect, useRef } from 'react'

const RefDom = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus()
  }, [])
  return (
    <div>
      <input ref={inputRef} />
    </div>
  )
}

export default RefDom