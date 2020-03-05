import React from "react";
import { Link } from "react-router-dom";
import './ItemMiniDisplay.css';
import { getRandomColorWithBorder } from './../../common/helper';
import { useSelector } from 'react-redux';


function ItemMiniDisplay(props) {
  const masterKey = useSelector(state => state.masterKey);
  return (
    <div className='item-mini-display' key={masterKey} style={getRandomColorWithBorder()}>
      <Link className='item-mini-display__button' to={'/item/' + props.product.id}>
        <h4 className='item-mini-display__title'>{props.product.name} - ${props.product.priceUSD.toFixed(2)}</h4>
        <div className='item-mini-display__img-wrapper'>
          <img className='item-mini-display__img' src={props.imgSrc}/>
        </div>
      </Link>
    </div>
  );
}

export default ItemMiniDisplay;
