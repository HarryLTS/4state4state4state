import React, { useState, useEffect } from "react";
import InvalidView from "./../InvalidView/InvalidView";
import NavBar from './../../components/NavBar/NavBar';
import Footer from './../../components/Footer/Footer';
import { Slider, TextField, MenuItem, Select, Button } from '@material-ui/core';
import { imageLoader, productLoader, ccvTranslations } from './../../common/constants';
import {  validateCardNumber } from './../../common/helper';
import { Link } from "react-router-dom";
import './ItemView.css';

function PaymentField() {
  const CARD_NUMBER_MAX = 9999999999999999;
  const currentYear = (new Date).getFullYear()
  const [cardNumber, setCardNumber] = useState(0);
  const [validCard, setValidCard] = useState(true);
  const [moved, setMoved] = useState(false);

  const [cardMonth, setCardMonth] = useState(0);
  const [cardYear, setCardYear] = useState(0);

  const [ccv, setCcv] = useState(0);

  useEffect(() => {
    const stringCard = cardNumber.toString();
    setValidCard(validateCardNumber(stringCard));
  }, [cardNumber]);
  const handleSliderChange = (e, value) => {
    const newNumber = Math.round((value / 100) * CARD_NUMBER_MAX + Math.random() * (CARD_NUMBER_MAX/100));
    if (value == 0) setCardNumber(0);
    else if (newNumber > CARD_NUMBER_MAX) setCardNumber(CARD_NUMBER_MAX);
    else setCardNumber(newNumber);
  }

  const handleTextFieldInputChange = (e) => {
    setMoved(true);
    setCardNumber(e.target.value == "" ? 0 : e.target.valueAsNumber);
  }

  const handleBlur = () => {
    if (cardNumber < 0) setCardNumber(0);
    else if (cardNumber > CARD_NUMBER_MAX) setCardNumber(CARD_NUMBER_MAX);
  }

  const handleSelectChange = (e) => {
    setMoved(true);
    setCcv(e.target.value);
  }

  const renderMenuItems = () => {
    let menuItems = [];
    for (let n = 0; n <= 999; n++) {
      menuItems.push(<MenuItem value={n}>{ccvTranslations[n]}</MenuItem>);
    }
    return menuItems;
  }

  return (
    <div className='payment-field'>
      <div>
        <h3>Credit Card Number</h3>
        <Slider
        value={(cardNumber/CARD_NUMBER_MAX) * 100}
        onChange={handleSliderChange}
        />
        <TextField
        fullWidth
        onChange={handleTextFieldInputChange}
        onBlur={handleBlur}
        type="number"
        value={cardNumber}
        error={!validCard && moved}
        helperText={(!validCard && moved) ? "This is not a valid card number." : ""}
        />
      </div>
      <div>
        <h3>Expiration Month/Year</h3>
        <div className='payment-field__exp-wrapper'>
          <div className='payment-field__exp-month'>
            <TextField
            onChange={e => setCardMonth(e.target.value)}
            fullWidth
            error={cardMonth < 0 || cardMonth > 12}
            helperText={(cardMonth < 0 || cardMonth > 12) ? "Invalid month" : ""}
            />
          </div>
          <p>/</p>
          <div className='payment-field__exp-year'>
            <TextField
            onChange={e => setCardYear(e.target.value)}
            fullWidth
            error={cardYear < 0 || cardYear > currentYear}
            helperText={(cardYear < 0 || cardYear > currentYear) ? "Invalid year" : ""}
            />
          </div>
        </div>
      </div>
      <div className='payment-field__ccv-wrapper'>
        <h3>CCV</h3>
        <Select
          fullWidth
          value={ccv}
          onChange={handleSelectChange}
        >
          {renderMenuItems()}
        </Select>
      </div>
      <div className='payment-field__submit-button'>
        <Link className='payment-field__link' to='/payment'>
          <Button variant="contained" fullWidth> Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PaymentField;
