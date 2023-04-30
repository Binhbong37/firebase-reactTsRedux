import React from 'react';
import logo from '../../public/imgs/litleLogo.png';
import { NavLink } from "react-router-dom";
import TelePhone from '../Icons/Telephone';

const Header: React.FC = () => {

  return (
    <header className='header-container'>
      <div className='header'>
        <div className='wrapper header-layout'>
          <div className='header-logo'>
            <img src={logo} alt='LogoTiltle' />
          </div>
          <ul className='list-items'>
            <li><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Trang chủ
            </NavLink></li>

            <li><NavLink
              to="/event"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            > Sự kiện
            </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className='header-right'>
            <p className='telphone'><TelePhone /></p>
            <p>0123456789
            </p>          </div>

        </div>
      </div>
      {/* <div className='ellipse'></div> */}
    </header>





  )
}

export default Header