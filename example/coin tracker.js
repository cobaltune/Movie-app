import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(1);
  const [amount, setAmount] = useState(1);
  const onChange = (event) => {
    setAmount(event.target.value);
    setDollar(1);
  };
  const handleInput = (event) => {
    setDollar(event.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins {loading ? '(0)' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onChange}>
          {coins.map((coin) => (
            <option
              key={coin.id}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <input
          onChange={handleInput}
          value={dollar}
          type='number'
          placeholder='please enter the amount'
        ></input>
        $
      </div>
      <h2>this is {dollar / amount}</h2>
    </div>
  );
}

export default App;
