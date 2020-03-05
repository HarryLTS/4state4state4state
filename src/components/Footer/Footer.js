import React from "react";
import './Footer.css';

function Footer() {

  const handleScrambleColors = () => {

  }
  return (
    <div>
      <footer className='footer'>
        <div>
          <button className='footer__action-button' onClick={handleScrambleColors}>
            Dont like the colors? Try a different scheme.
          </button>
        </div>
        <div className='footer__info'>
          <h1>GYMBO GANG</h1>
          <p>phone: (425) 836-2332</p>
          <p>support: gymbog_support@gmail.com</p>
          <p>feedback: gymbog_voice@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
