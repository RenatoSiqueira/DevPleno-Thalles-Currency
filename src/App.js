import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyInput from 'react-currency-input';

const App = () => {
  const [amount, setAmount] = useState('0.00')

  const handleChange = (ev, maskedValue, floatValue) => {
    setAmount(maskedValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <CurrencyInput
          value={amount}
          onChangeEvent={handleChange}
          decimalSeparator=","
          thousandSeparator="."
          prefix="R$ "
        />
      </header>
    </div>
  );
}

export default App;
