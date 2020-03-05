import React from "react";
import './Home.css';
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import ItemMiniDisplay from './../../components/ItemMiniDisplay/ItemMiniDisplay';
import { imageLoader, productLoader } from './../../common/constants';
import { sortByKey } from './../../common/helper';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useSelector } from 'react-redux';
import { getRandomColor } from './../../common/helper';



function Home() {
  const masterKey = useSelector(state => state.masterKey);
  const images = imageLoader();
  const products = productLoader();

  const renderMainDisplay = () => {
    return (
      <div className='main-display'>
        <div className='main-display__text-wrapper'>
          <h1 className='main-display__title' key={masterKey + '0'} style={getRandomColor()}>Get Guiced</h1>
          <div className='main-display__catalog-button'>
            <Link to="/catalog" className='main-display__catalog-button__link' key={masterKey} style={getRandomColor()}>
              Browse Products >>
            </Link>
          </div>
        </div>
        <div className='main-display__img-wrapper'>
          <img src={images[0].src} alt='bruh'/>
        </div>
      </div>
    );
  }

  const renderSortedMiniViewsByKey = (key) => {
    //const sortedItems = sortByKey(products, key);
    const sortedItems = sortByKey(products, key);
    const itemDisplays = [];
    for (let i = 0; i < Math.min(4, sortedItems.length); i++) {
      itemDisplays.push(
        <Grid item xs={3} key={masterKey + ',' + i} style={getRandomColor()}>
          <ItemMiniDisplay
          key={sortedItems[i].id}
          product={sortedItems[i]}
          imgSrc={images[sortedItems[i].imgId].src}
          />
        </Grid>
      );
    }
    return (
      <Grid container spacing={2}>
        {itemDisplays}
      </Grid>
    );
  }

  const renderHotItems = () => {
    return (
      <div className='hot-items' key={masterKey + '12'} style={getRandomColor()}>
        <h2 className='hot-items__title'>
          HOT ITEMS
        </h2>
        <div>
          {renderSortedMiniViewsByKey('purchasesMade')}
        </div>
      </div>
    );
  }

  const renderNewItems = () => {
    return (
      <div className='new-items' key={masterKey} style={getRandomColor()}>
        <h2 className='new-items__title'>
          NEW ITEMS
        </h2>
        <div>
          {renderSortedMiniViewsByKey('releaseDate')}
        </div>
      </div>
    );
  }

  return (
    <div key={masterKey} style={getRandomColor()}>
      <NavBar />
      <div className='home-content-wrapper' key={masterKey} style={getRandomColor()}>
        {renderMainDisplay()}
        {renderHotItems()}
        {renderNewItems()}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
