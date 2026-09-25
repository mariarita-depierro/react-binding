/* Crea un bottone che alterni la propria classe stilistica (es. da primary a success)
ad ogni click, mutandone dinamicamente l'aspetto grafico*/

import { useState } from "react";

export default function ButtonStyleSection() {
  const [isActive, setIsActive] = useState(false);

  function handleStyle() {
    setIsActive((isActive) => !isActive);
  }

  return (
    <section className="bg-success-subtle px-1 pb-2 mt-1">
      <h2 className="mb-5">Change Button Style</h2>
      <button
        onClick={handleStyle}
        className={isActive ? "btn btn-warning" : "btn btn-secondary"}
      >
        Click me!
      </button>
    </section>
  );
}
