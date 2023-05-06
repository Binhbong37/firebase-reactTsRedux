import React from 'react';
import logo from '../../public/imgs/litleLogo.png';
import { NavLink } from "react-router-dom";
import TelePhone from '../Icons/Telephone';

const Header: React.FC = () => {

  return (
    <header className='header'>
      <div className='header-left'>
        <img src={logo} alt='logoHeader' />
      </div>
      <div className='header-right'>
        <div className='header-right__nav'>
          <ul className='header-right__nav-list'>
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
          <div className='header-right__nav-phone'>
            <p className='telephone'><TelePhone /></p>
            <p>0123456789</p>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header