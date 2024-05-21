import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Button';
import './Navbar.css';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    }

    // show SIGN IN button only 1 time even when refresh
    useEffect(() => {
      showButton();
    }, []);

    window.addEventListener('resize', showButton);

    console.log(click)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                ECOM24 <FontAwesomeIcon icon={faTypo3} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={click ? faXmark : faBars} style={{color:'#fff'}} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/fixtures' className='nav-links' onClick={closeMobileMenu}>
                  Matches & Fixtures
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/groups' className='nav-links' onClick={closeMobileMenu}>
                  Groups
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/sign-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign In
                </Link>
              </li>
            </ul>
        </div>
            {button && <Button buttonStyle='btn-outline'>SIGN IN</Button>}
      </nav>
    </>
  )
}

export default Navbar;
