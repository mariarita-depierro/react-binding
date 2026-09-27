/* 6. applica o rimuovi uno stile specifico (es. grassetto, corsivo, sottolineato, evidenziato)
ad un testo target quando la checkbox associata viene attivata o disattivata*/

import { useState } from "react";

import { styleOptions } from "../../lib/vars";

export default function TextStyleByCheckbox() {
  const [options, setOptions] = useState(styleOptions);

  function handleCheckOption(selectedLabel) {
    setOptions(
      options.map((item) => {
        if (item.label === selectedLabel) {
          return { ...item, isActive: !item.isActive };
        }
        return item;
      }),
    );
  }

  const filteredIsActive = options
    .filter((item) => item.isActive)
    .map((item) => item.font);

  return (
    <section className="bg-warning-subtle px-2 py-4">
      <h2 className="mb-3">Change Text Style</h2>

      {options.map((option) => (
        <div key={option.label}>
          <input
            className="form-check-input border-3 me-2"
            id={option.label}
            type="checkbox"
            checked={option.isActive}
            onChange={() => handleCheckOption(option.label)}
          />
          <label className="form-check-label" htmlFor={option.label}>
            {option.label}
          </label>
        </div>
      ))}

      <p className={`mt-3 ${filteredIsActive}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat qui,
        pariatur laborum cum molestias ex natus nemo repudiandae error. Rem,
        totam illum. Assumenda ipsum perspiciatis voluptatum minus, molestias ut
        temporibus.
      </p>
    </section>
  );
}
