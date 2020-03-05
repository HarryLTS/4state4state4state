import React from "react";
import './Home.css';
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import ItemMiniDisplay from './../../components/ItemMiniDisplay/ItemMiniDisplay';
import { imageLoader, productLoader } from './../../common/constants';
import { sortByKey } from './../../common/helper';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

function Home() {

  const images = imageLoader();
  const products = productLoader();

  const renderMainDisplay = () => {
    return (
      <div className='main-display'>
        <div className='main-display__text-wrapper'>
          <h1 className='main-display__title'>Get Guiced</h1>
          <div className='main-display__catalog-button'>
            <Link to="/catalog" className='main-display__catalog-button__link'>
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
    const sortedItems = sortByKey(products, key);

    const itemDisplays = [];
    for (let i = 0; i < Math.min(4, sortedItems.length); i++) {
      itemDisplays.push(
        <Grid item xs={3}>
          <ItemMiniDisplay
          key={i}
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
      <div className='hot-items'>
        <h2 className='hot-items__title'>
          HOT ITEM
        </h2>
        <div>
          {renderSortedMiniViewsByKey('purchasesMade')}
        </div>
      </div>
    );
  }

  const renderNewItems = () => {
    return (
      <div className='new-items'>
        <h2 className='new-items__title'>
          NEW ITEM
        </h2>
        <div>
          {renderSortedMiniViewsByKey('releaseDate')}
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className='home-content-wrapper'>
        {renderMainDisplay()}
        {renderHotItems()}
        {renderNewItems()}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
