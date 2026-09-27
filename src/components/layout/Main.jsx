import ButtonStyleSection from "../sections-parte1/ButtonStyleSection";
import CounterSection from "../sections-parte1/CounterSection";
import JustifyParagraphSection from "../sections-parte1/JustifyParagraphSection";
import MessageByLanguageSection from "../sections-parte1/MessageByLanguageSection";
import ToDoListSection from "../sections-parte1/ToDoListSection";
import CharacterCounterSection from "../sections-parte2/CharacterCounterSection";
import CheckActionSection from "../sections-parte2/CheckActionSection";
import FilterByNameSection from "../sections-parte2/FilterByNameSection";
import FontSizeByRadioSection from "../sections-parte2/FontSizeByRadioSection";
import FullNameSection from "../sections-parte2/FullNameSection";
import TextStyleByCheckbox from "../sections-parte2/TextStyleByCheckbox";
import UpdateTextSection from "../sections-parte2/UpdateTextSection";

export default function Main() {
  return (
    <main className="container">
      <h2 className="text-uppercase text-center">Parte I</h2>
      <div className="row g-3">
        {/* <!-- Prima riga --> */}
        <div className="col-md-4">
          <CounterSection />
        </div>
        <div className="col-md-4">
          <ButtonStyleSection />
        </div>
        <div className="col-md-4">
          <JustifyParagraphSection />
        </div>

        {/* <!-- Seconda riga --> */}
        <div className="col-md-6">
          <MessageByLanguageSection />
        </div>
        <div className="col-md-6">
          <ToDoListSection />
        </div>
      </div>
      <hr className="border-2" />
      <h2 className="text-uppercase text-center">Parte II</h2>
      <div className="row g-3">
        {/* <!-- Terza --> */}
        <div className="col-md-4">
          <CharacterCounterSection />
        </div>
        <div className="col-md-4">
          <FilterByNameSection />
        </div>
        <div className="col-md-4">
          <UpdateTextSection />
        </div>

        {/* <!-- Quarta riga --> */}
        <div className="col-md-6">
          <FullNameSection />
        </div>
        <div className="col-md-6">
          <CheckActionSection />
        </div>
        <div className="col-md-6">
          <TextStyleByCheckbox />
        </div>
        <div className="col-md-6">
          <FontSizeByRadioSection />
        </div>
      </div>
      <hr className="border" />
    </main>
  );
}

/* 8. converti e mostra il prezzo di un prodotto fisso in diverse valute (EUR, USD, GBP)
aggiornando il simbolo e il valore in base alla select
 */

/* 9. mostra il numero di caratteri rimanenti da scrivere
durante la digitazione in una textarea
 */

/* 10. mostra degli avvisi riguardo la quantità di testo
scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale) */
