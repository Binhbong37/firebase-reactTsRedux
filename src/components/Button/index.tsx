import React, { ReactNode } from 'react';
import { Button as Buttonn } from 'antd';

type Props = {
  children: ReactNode;
  [key: string]: any;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <div className='btn-container' {...props}>
      <Buttonn className='btn' htmlType='submit'>
        {children}
      </Buttonn>
    </div>
  )
}

export default Button