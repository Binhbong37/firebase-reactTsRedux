import { ReactNode } from 'react';

type Props = {
  children: ReactNode,
  [key: string]: any;

}

const AroundBox = ({ children, ...props }: Props) => {
  return (
    <div className='box-container' {...props}>
      <div className='box-inside'>
        <div className='box-content'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AroundBox