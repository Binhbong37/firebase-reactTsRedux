import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  [key: string]: any;
}

const Button = ({ children }: Props) => {
  return (
    <div className='btn-container'>
      <button className='btn'>
        {children}
      </button>
    </div>
  )
}

export default Button