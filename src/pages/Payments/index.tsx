import React from 'react'
import { Link } from 'react-router-dom'

const Payments: React.FC = () => {
  return (
    <div>
      <h2 className='title-page'>Thanh toán</h2>
      <Link to={'/paymentsucess'}>
        <button className='btn btn-ticket'>Thanh toán</button>
      </Link>
    </div>
  )
}

export default Payments