/* 9. mostra il numero di caratteri rimanenti da scrivere
durante la digitazione in una textarea*/

import { useState } from "react";

const maxNumberOfCharacters = 100;

export default function RemainingCharactersSection() {
  const [character, setCharacter] = useState("");

  const remainingCharacters = maxNumberOfCharacters - character.length;

  return (
    <section className="bg-danger-subtle p-4">
      <h2>Remaining Characters</h2>
      <textarea
        className="form-control my-1"
        id="floatingTextarea"
        placeholder="Digit a text"
        maxLength={100}
        value={character}
        onChange={(e) => setCharacter(e.target.value)}
      ></textarea>
      <label htmlFor="floatingTextarea" className="mb-1">
        Remaining Characters: {remainingCharacters}
      </label>
      <p>Max number of Characters: {maxNumberOfCharacters}</p>
    </section>
  );
}
