/* 4. unisci in tempo reale il valore di due input distinti (nome e cognome)
visualizzando il risultato completo in un unico elemento di testo*/

import { useState } from "react";

export default function FullNameSection() {
  const [nameInput, setNameInput] = useState("");
  const [surnameInput, setSurnameInput] = useState("");

  const fullName = `${nameInput} ${surnameInput}`;

  return (
    <section className="bg-danger p-4 text-white">
      <h2>Full Name</h2>

      {/* Name */}
      <label className="form-label" htmlFor="name">
        Name
      </label>
      <input
        onChange={(e) => setNameInput(e.target.value)}
        id="name"
        type="text"
        value={nameInput}
        className="form-control"
      />
      {/* Surname */}
      <label className="form-label mt-2" htmlFor="surname">
        Surname
      </label>
      <input
        onChange={(e) => setSurnameInput(e.target.value)}
        id="surname"
        type="text"
        value={surnameInput}
        className="form-control"
      />

      {/* Full Name */}
      <p className="h1 mt-2">{fullName}</p>
    </section>
  );
}
