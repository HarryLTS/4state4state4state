import React, { useRef, useState } from "react";
import './Footer.css';
import { getRandomColor, getRandomColorWithBorder } from './../../common/helper';
import { useSelector, useDispatch } from 'react-redux';
import { gymboLogo } from './../../common/constants';

function Footer() {
  let rootRef = useRef(null);
  const masterKey = useSelector(state => state.masterKey);
  const dispatch = useDispatch();
  const handleScrambleColors = () => {
    dispatch({type:"updateKey"});
  }
  return (
    <div ref={rootRef}>
      <footer className='footer' key={masterKey} style={getRandomColor()}>
        <div>
          <button className='footer__action-button' onClick={handleScrambleColors} key={masterKey} style={getRandomColorWithBorder()}>
            {'>> Dont like the colors? Try a different scheme. <<'}
          </button>
        </div>
        <div className='footer__info' key={masterKey} style={getRandomColor()}>
          <h1>GYMBO GANG</h1>
          <p>phone: (425) 836-2332</p>
          <p>support: gymbog_support@gmail.com</p>
          <p>feedback: gymbog_voice@gmail.com</p>
        </div>
        <div>
          <div className='footer__logo' key={masterKey} style={getRandomColor()}>
            <img src={gymboLogo}/>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
