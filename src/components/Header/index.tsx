import React from 'react';
import logo from '../../public/imgs/titleLogo.png';
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div className='header'>
        <div className='header-logo'>
          <img src={logo} alt='LogoTiltle' />
        </div>
        <div className='header-right'>
          <ul className='list-items'>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Trang chủ</li>
            </NavLink>

            <NavLink
              to="/event"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Sự kiện</li>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <li>Liên hệ</li>
            </NavLink>
          </ul>
          <div className='contactNumber'>
            0123456789
          </div>
        </div>
      </div>
      <div className="ellipse"></div>
    </>
  )
}

export default Header