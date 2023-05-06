import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  [key: string]: any;
};

const CartTitle = ({ children, className = "", ...props }: Props) => {
  return (
    <div className='cartTile-container'>
      <div className='cartTile-inside'>
        {children}
      </div>
    </div>
  )
}

export default CartTitle