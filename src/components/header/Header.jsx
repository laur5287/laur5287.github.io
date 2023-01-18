import React from 'react';
import ActionButtons from '../actionButtons/actionButtons';
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './header-socials';



const Header = () => {
  const ccxt = require("ccxt")
  console.log(ccxt.exchanges)
    return (
        <header>
          <div className='container header__container'>
            <h5>Hello, I`am</h5>
            <h1>Laur</h1>
            <h5 className='text-light'>Front-Dev Wannabe :)</h5>
            <ActionButtons />
            <div className="me">
              <img src={ME} alt="me" />
            </div>
            <a href="#Contact" className="scroll-down">Scroll-down</a>
            <HeaderSocials />

            

          </div>
        </header>
      );
}
 
export default Header;