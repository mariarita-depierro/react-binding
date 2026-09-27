/* 7. ridimensiona il testo della pagina in base al radio button selezionato dall'utente*/

import { useState } from "react";

import { fontSizeOptions } from "../../lib/vars";

export default function FontSizeByRadioSection() {
  const [selectedSize, setSelectedSize] = useState(5);

  return (
    <section className="bg-success-subtle p-4">
      <h2>Change Font Size By Radio</h2>

      {fontSizeOptions.map((option) => (
        <div key={option.label}>
          <input
            type="radio"
            name="fontSizeGroup"
            id={option.label}
            className="me-2 form-check-input border-3"
            checked={selectedSize === option.fontSize}
            onChange={() => setSelectedSize(option.fontSize)}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </div>
      ))}

      <p className={`mt-3 fs-${selectedSize}`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        debitis quod. Ducimus cupiditate ratione, saepe mollitia, rem placeat
        reprehenderit, doloribus voluptate fugit deleniti cum reiciendis.
        Perferendis nemo ipsam ad quisquam.
      </p>
    </section>
  );
}
