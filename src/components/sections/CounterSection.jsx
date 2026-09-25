/* Implementa un contatore numerico incrementabile via bottone e
    aggiungi un pulsante dedicato per azzerare istantaneamente il valore*/

import { useState } from "react";

export default function CounterSection() {
  const [count, setCount] = useState(0);

  function handleCounter() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <section className="container mt-1 text-center bg-warning-subtle py-3">
      <h2 className="text-danger-emphasis">Counter Section</h2>
      <p className="display-1">{count}</p>
      <button onClick={handleCounter} className="btn btn-success me-1">
        Add Number
      </button>
      <button onClick={handleReset} className="btn btn-danger ">
        Reset
      </button>
    </section>
  );
}
