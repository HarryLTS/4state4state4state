import React, { useState, useEffect } from "react";
import { Slider, TextField, MenuItem, Select, Button } from '@material-ui/core';
import { ccvTranslations } from './../../common/constants';
import {  validateCardNumber } from './../../common/helper';
import { Link } from "react-router-dom";
import './ItemView.css';


function PaymentField() {
  const CARD_NUMBER_MAX = 9999999999999999;

  const [cardNumber, setCardNumber] = useState(0);
  const [validCard, setValidCard] = useState(true);
  const [moved, setMoved] = useState(false);

  const [cardMonth, setCardMonth] = useState(1);
  const [cardYear, setCardYear] = useState(2000);

  const [ccv, setCcv] = useState(0);
  const [showFormError, setShowFormError] = useState(false);

  const validMonth = () => {
    return !(cardMonth < 1 || cardMonth > 12);
  }

  const validYear = () => {
    const currentYear = (new Date()).getFullYear();
    return !(cardYear < 1 || cardYear > currentYear);
  }

  useEffect(() => {
    const stringCard = cardNumber.toString();
    setValidCard(validateCardNumber(stringCard));
  }, [cardNumber]);
  const handleSliderChange = (e, value) => {
    const newNumber = Math.round((value / 100) * CARD_NUMBER_MAX + Math.random() * (CARD_NUMBER_MAX/100));
    if (value === 0) setCardNumber(0);
    else if (newNumber > CARD_NUMBER_MAX) setCardNumber(CARD_NUMBER_MAX);
    else setCardNumber(newNumber);
    setMoved(true);
  }

  const handleTextFieldInputChange = (e) => {

    setMoved(true);
    setCardNumber(e.target.value === "" ? 0 : e.target.valueAsNumber);
  }

  const handleBlur = () => {
    if (cardNumber < 0) setCardNumber(0);
    else if (cardNumber > CARD_NUMBER_MAX) setCardNumber(CARD_NUMBER_MAX);
  }

  const handleSelectChange = (e) => {
    setCcv(e.target.value);
  }

  const renderMenuItems = () => {
    let menuItems = [];
    for (let n = 0; n <= 999; n++) {
      menuItems.push(<MenuItem key={n} value={n}>{ccvTranslations[n]}</MenuItem>);
    }
    return menuItems;
  }

  const handleSubmit = (e) => {
    if (!validCard || !validMonth() || !validYear()) {
      e.preventDefault();
      setShowFormError(true);
    }
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
        disabled
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
            type="number"
            value={cardMonth}
            onChange={e => setCardMonth(e.target.value)}
            fullWidth
            error={!validMonth()}
            helperText={!validMonth() ? "Invalid month" : ""}
            />
          </div>
          <p className='payment-field__exp-divider'>/</p>
          <div className='payment-field__exp-year'>
            <TextField
            type="number"
            value={cardYear}
            onChange={e => setCardYear(e.target.value)}
            fullWidth
            error={!validYear()}
            helperText={!validYear() ? "Invalid year" : ""}
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
        <Link onClick={handleSubmit} className='payment-field__link' to='/payment'>
          <Button variant="contained" fullWidth> Buy Now
          </Button>
        </Link>
      </div>
      {
      showFormError &&
      <div className='payment-field__error'>
        <p>Error: One or more fields were filled out incorrectly.</p>
      </div>
      }
    </div>
  );
}

export default PaymentField;
