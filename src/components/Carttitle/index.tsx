import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  [key: string]: any;
};

const CartTitle = ({ children, ...props }: Props) => {
  return (
    <div className='cartTile-container' {...props}>
      <div className='cartTile-inside'>
        {children}
      </div>
    </div>
  )
}

export default CartTitle