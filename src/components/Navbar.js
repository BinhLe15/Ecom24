import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTypo3 } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { TButton } from './TButton';
import './Navbar.css';
import axios from 'axios';
import { EventEmitter } from "events"; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [isLogin, setIsLogin] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const eventEmitter = new EventEmitter();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const verifyLogin = async () => {
        try {
            const res = await axios.get('http://localhost:8000/verify');
            if (res.data.status) {
                setIsLogin(true);
                console.log("Log status:" + isLogin);
            } else {
                setIsLogin(false);
            }
        } catch (error) {
            console.error('Error verifying login:', error);
        }
    };

    verifyLogin();

}, []);



  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const handleLogout = () => {
    setIsLogin(false);
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
            <FontAwesomeIcon icon={click ? faXmark : faBars} style={{ color: '#fff' }} />
          </div>


          {isLogin? (
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
                  News
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/fixtures' className='nav-links' onClick={closeMobileMenu}>
                  Matches & Fixtures
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/teams' className='nav-links' onClick={closeMobileMenu}>
                  Teams
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/groups' className='nav-links' onClick={closeMobileMenu}>
                  Groups
                </Link>
              </li>

              <li className='nav-item'>
                <TButton buttonStyle='btn_outline' className='btn_logout' onClick={handleLogout} >Log out</TButton>
              </li>
            </ul>

          ) : (
            <>
            <ul className={click ? 'nav-menu active' : 'nav-menu'} >
              <li className='nav-item'>
                
              </li>
              <li className='nav-item'>
                
              </li>
              <li className='nav-item'>
                
              </li>
              <li className='nav-item'>
                
              </li>
              <li className='nav-item'>
                
              </li>
              <li className='nav-item'>
                
              </li>
            </ul>
            <TButton variant="contained" link='/sign-in' target={''} >SIGN IN</TButton>
            </>
          
          )}
        </div>
        
      </nav>
    </>
  )
}

export default Navbar;
