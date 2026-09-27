/* 5. mantieni disabilitato un pulsante di azione finché l'utente non spunta
una specifica casella di controllo per confermare la volontà di procedere*/

import { useState } from "react";

export default function CheckActionSection() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className=" container border border-2 rounded-2 p-4">
      <h2>Check Action</h2>

      <div className="col g-3">
        <input
          className="form-check-input border-3 mt-2 me-2"
          id="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="checkbox">
          Accept the{" "}
          <span className="text-primary text-decoration-underline">
            privacy police
          </span>{" "}
          to proceed.
        </label>

        <button disabled={!isChecked} className="btn btn-primary ms-3">
          Submit
        </button>
      </div>
    </section>
  );
}
