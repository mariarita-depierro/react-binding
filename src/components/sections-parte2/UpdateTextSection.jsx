/* 3. aggiorna il contenuto di un tag <h1> con il testo 
inserito dall'utente in una casella di input,
sostituendo il valore precedente ad ogni modifica*/

import { useState } from "react";

export default function UpdateTextSection() {
  const [text, setText] = useState("React");

  return (
    <section className="bg-warning p-4">
      <h2>Update Text</h2>
      <label htmlFor="text" className="form-label">
        Insert a text to update the title
      </label>
      <input
        onChange={(e) => setText(e.target.value)}
        id="text"
        type="text"
        value={text}
        className="form-control"
      />
      <h1 className="mt-2">{text}</h1>
    </section>
  );
}
