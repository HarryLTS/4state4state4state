import React from "react";
import InvalidView from "./../InvalidView/InvalidView";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import PaymentField from './PaymentField';
import { imageLoader, productLoader } from './../../common/constants';
import './ItemView.css';
import { useSelector } from 'react-redux';
import { getRandomColor } from './../../common/helper';



function ItemView(props) {
  const masterKey = useSelector(state => state.masterKey);
  if (isNaN(props.match.params.id)) return <InvalidView />
  const id = parseInt(props.match.params.id);
  const images = imageLoader();
  const product = productLoader()[id];


  const renderMainDisplay = () => {
    return (
      <div className='item-view' key={masterKey} style={getRandomColor()}>
        <div className='item-view__content'>
          <div className='item-view__product'>
            <div className='item-view__image'>
              <img src={images[product.imgId].src}/>
            </div>
            <div className='item-view__info'>
              <h1 className='item-view__title'>{product.name}</h1>
              <p className='item-view__desc'>
                {product.desc}
              </p>
            </div>
          </div>

          <div className='item-view__payment-wrapper' key={masterKey} style={getRandomColor()}>
            <h2>Price: ${product.priceUSD.toFixed(2)}</h2>
            <PaymentField />

          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      {renderMainDisplay()}
      <Footer />
    </div>
  );
}

export default ItemView;
