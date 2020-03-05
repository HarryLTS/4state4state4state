import React from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getRandomColor } from './../../common/helper';
import { gymboLogo } from './../../common/constants';

function NavBar() {
  const masterKey = useSelector(state => state.masterKey);
  const superMode = useSelector(state => state.superMode);
  const dispatch = useDispatch();

  const handleLogoClicked = () => {
    dispatch({type:'toggleSuperMode'});
  }

  return (
    <div>
      <nav className='nav' key={masterKey} style={getRandomColor()}>
          <div className='nav__item'>
            <Link to="/" className='nav__item__link'>Home</Link>
          </div>
          <div className='nav__item' key={masterKey + '1'} style={getRandomColor()}>
            <Link to="/catalog" className='nav__item__link'>Catalog</Link>
          </div>
          <div className='nav__item' key={masterKey + '2'} style={getRandomColor()}>
            <Link to="/about" className='nav__item__link'>About</Link>
          </div>
          {superMode &&
          <div className='nav__item nav__item--supermode' key={masterKey + '2'} style={getRandomColor()}>
            <h4>SUPER MODE ENABLED</h4>
          </div>
          }
          <div className='nav__item--logo' key={masterKey + '3'} style={getRandomColor()} onClick={handleLogoClicked}>
            <img src={gymboLogo}/>
          </div>
      </nav>
    </div>
  );
}

export default NavBar;
