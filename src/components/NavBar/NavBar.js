import React from "react";
import './NavBar.css';
import {
  Link
} from "react-router-dom";


function NavBar() {
  return (
    <div>
      <nav className='nav'>
          <div className='nav__item'>
            <Link to="/" className='nav__item__link'>Home</Link>
          </div>
          <div className='nav__item'>
            <Link to="/catalog" className='nav__item__link'>Catalog</Link>
          </div>
          <div className='nav__item'>
            <Link to="/about" className='nav__item__link'>About</Link>
          </div>
          <div className='nav__item nav__item--logo'>
            walter
          </div>
      </nav>
    </div>
  );
}

export default NavBar;
