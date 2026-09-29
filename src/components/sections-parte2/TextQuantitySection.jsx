/* 10. mostra degli avvisi riguardo la quantità di testo
scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale) */

import { useState } from "react";

import { alertMessages } from "../../lib/vars";

export default function TextQuantitySection() {
  const [text, setText] = useState("");

  const messageAlertRule = alertMessages.find(
    (item) => text.length <= item.max,
  );

  return (
    <section className="bg-primary-subtle p-4">
      <h2>Text Quantity Section</h2>
      <textarea
        className="form-control my-1"
        id="floatingTextarea"
        placeholder="Digit a text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p className={`alert alert-${messageAlertRule.variantColor} mt-3`}>
        {messageAlertRule.label}
      </p>
    </section>
  );
}
