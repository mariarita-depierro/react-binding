/* 8. converti e mostra il prezzo di un prodotto fisso in diverse valute (EUR, USD, GBP)
aggiornando il simbolo e il valore in base alla select*/

import { useState } from "react";

import { prices } from "../../lib/vars";

const euroPrice = 13;

export default function ConvertPriceSection() {
  const [currentCurrency, setCurrentCurrency] = useState("euro");

  const infoCurrency = prices.find((item) => item.label === currentCurrency);
  const convertPrice = euroPrice * infoCurrency.conversionRate;

  return (
    <section className="bg-black text-white p-4">
      <h2>Pricing Section</h2>
      <p>Product Price: {euroPrice}</p>
      <label htmlFor="price" className="form-label me-2">
        Select a valute:
      </label>
      <select
        id="price"
        value={currentCurrency}
        onChange={(e) => setCurrentCurrency(e.target.value)}
      >
        {prices.map((price) => (
          <option key={price.label} value={price.label}>
            {price.label}
          </option>
        ))}
      </select>
      <p className="mt">
        Il prezzo convertito è: {convertPrice.toFixed(2)}
        {infoCurrency.symbol}
      </p>
    </section>
  );
}
