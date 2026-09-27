/* 2. filtra istantaneamente un array di nomi visualizzati a
schermo mostrando solo quelli che contengono la stringa digitata nell'input*/

import { useState } from "react";

import { names } from "../../lib/vars";

export default function FilterByNameSection() {
  const [name, setName] = useState("");

  const filteredNames = names.filter((item) =>
    item.includes(name.toLowerCase()),
  );

  return (
    <section className="bg-danger-subtle p-4">
      <h2>Filter By Name</h2>
      <div>
        <label htmlFor="name" className="form-label">
          Inserisci un nome
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          className="form-control mb-4"
          value={name}
        />
      </div>
      <ul className="list-group">
        {filteredNames.map((name, index) => (
          <li key={index} className="list-group-item text-capitalize">
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
