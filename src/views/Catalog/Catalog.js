import React from "react";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import './Catalog.css';
import ItemMiniDisplay from './../../components/ItemMiniDisplay/ItemMiniDisplay';
import { imageLoader, productLoader } from './../../common/constants';
import { sortByKey } from './../../common/helper';
import Grid from "@material-ui/core/Grid";

function Catalog() {
  const images = imageLoader();
  const products = productLoader();

  const renderMiniViews = () => {
    const itemDisplays = [];
    for (let i = 0; i < products.length; i++) {
      itemDisplays.push(
        <Grid item xs={3}>
          <ItemMiniDisplay
          key={i}
          product={products[i]}
          imgSrc={images[products[i].imgId].src}
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
  const renderCatalog = () => {
    return (
      <div className='catalog'>
        <h2 className='catalog__title'>
          CATALOG
        </h2>
        <div>
          {renderMiniViews()}
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      {renderCatalog()}
      <Footer />
    </div>
  );
}

export default Catalog;
