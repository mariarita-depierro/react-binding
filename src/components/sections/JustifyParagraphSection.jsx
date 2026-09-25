/* Creare un componente con tre pulsanti ed un paragrafo.
Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo.
Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato*/

import { useState } from "react";

export default function JustifyParagraphSection() {
  const [justify, setJustify] = useState("start");

  function handleJustify(justify) {
    setJustify(justify);
  }

  return (
    <section className="container bg-info-subtle mt-1 pb-2">
      <h2>Justify The Paragraph</h2>
      <p className={`text-${justify}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut deleniti
        rem error quis tempore officiis perferendis, nihil voluptate illum
        perspiciatis, maxime magnam quibusdam ratione qui enim. Fuga amet
        voluptate temporibus?
      </p>
      <div className="btn-group">
        <button
          onClick={() => handleJustify("start")}
          className="btn btn-primary me-1"
        >
          Left
        </button>
        <button
          onClick={() => handleJustify("center")}
          className="btn btn-primary me-1"
        >
          Center
        </button>
        <button
          onClick={() => handleJustify("end")}
          className="btn btn-primary"
        >
          Right
        </button>
      </div>
    </section>
  );
}
