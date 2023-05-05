import React, { ReactNode } from 'react'
interface Props {
  children: ReactNode
}


const WrapperDasboard = ({ children }: Props) => {
  return (
    <div className='wrapper-bg'>
      {children}
    </div>
  )
}

export default WrapperDasboard