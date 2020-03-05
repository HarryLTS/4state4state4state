import React from "react";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import './About.css';
import { useSelector } from 'react-redux';
import { getRandomColor } from './../../common/helper';

function About() {
  const masterKey = useSelector(state => state.masterKey);
  return (
    <div className='about' key={masterKey} style={getRandomColor()}>
      <NavBar />
      <div className='about__content'>
        <h1>WE ARE GYMBO GUICE</h1>
        <p className='about__desc'>
        Back in 2010, the founders of Gymbo Guice wanted to enjoy protien drink. But however, there only was the mediocre and low quality protien drinks on the market. Mr. Yan and I decided to leave our jobs as circus clowns to start up a brand new company to serve good quality Guice to everyone who would like to try it. Today, Gymbo Guice has over 95234 locations around the United States and we are rapidly expanding due to the very high quality of our Guices.
        </p>
        <h1>OUR GYMBO PROMISE</h1>
        <p className='about__desc'>
        What can you expect from Gymbo Guice? Only the highest quality of Guices available in the entire world. We at Gymbo Guice pride ourselves on natural ingredients sourced directly from the ground, sometime minutes before they reach your lips. That is the only way. It is our GYMBO WAY.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
