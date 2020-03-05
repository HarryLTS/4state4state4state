import React from "react";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import './InvalidView.css';

function InvalidView() {
  return (
    <div className='invalid'>
      <NavBar />
      <div className='invalid__content'>
        <h1>{'S..s..sowwy >///< UwU we couldnt find your page... OwO'}</h1>
        <p className='invalid__desc'>
        Dear Internet, Where do I begin... Let's start with this -I'm sorry. This is a first for me. I've never faced criticism like this before, because I've never made a mistake like this before. I'm surrounded by good people and believe I make good decisions, but I'm still a human being. I can be wrong. I didn't do it for views. I get views. I did it because I thought I could make a positive ripple on the internet, not cause a monsoon of negativity. That's never the intention. I intended to raise awareness for suicide and suicide prevention and while I thought "if this video saves just ONE life, it'll be worth it," I was misguided by shock and awe, as portrayed in the video. I still am. I do this sh*t every day. I've made a 15 minute TV show EVERY SINGLE DAY for the past 460+ days. One may understand that it's easy to get caught up in the moment without fully weighing the possible ramifications. I'm often reminded of how big of a reach I truly have & with great power comes great responsibility... for the first time in my life I'm regretful to say I handled that power incorrectly. It won't happen again. I love everyone. I believe in people. I'm out here. Peace #Logang4Life
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default InvalidView;
