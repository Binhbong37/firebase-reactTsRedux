import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode;
  [key: string]: any;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <div className='btn-container' {...props}>
      <button className='btn'>
        {children}
      </button>
    </div>
  )
}

export default Button