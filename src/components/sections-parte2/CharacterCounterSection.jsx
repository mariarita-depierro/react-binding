/* 1. Contatore caratteri: mostra dinamicamente il numero di caratteri inseriti
in una casella di input o textarea, aggiornando il conteggio ad ogni digitazione */

import { useState } from "react";

export default function CharacterCounterSection() {
  const [text, setText] = useState("");

  return (
    <section className="bg-primary text-white p-4">
      <h2>Character Counter</h2>
      <div>
        <label htmlFor="text" className="form-label">
          Insert a text
        </label>
        <input
          onChange={(e) => setText(e.target.value)}
          id="text"
          type="text"
          className="form-control"
          placeholder="Text Example"
          value={text}
        />
        <h3 className="form-text text-white">
          Numbers of characters: {text.length}
        </h3>
      </div>
    </section>
  );
}
