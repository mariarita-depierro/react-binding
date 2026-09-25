import ButtonStyleSection from "../sections-parte1/ButtonStyleSection";
import CounterSection from "../sections-parte1/CounterSection";
import JustifyParagraphSection from "../sections-parte1/JustifyParagraphSection";
import MessageByLanguageSection from "../sections-parte1/MessageByLanguageSection";
import ToDoListSection from "../sections-parte1/ToDoListSection";
import CharacterCounterSection from "../sections-parte2/CharacterCounterSection";

export default function Main() {
  return (
    <main className="container">
      <h2 className="text-uppercase text-center">Parte I</h2>
      <div class="row g-3">
        {/* <!-- Prima riga --> */}
        <div class="col-md-4">
          <CounterSection />
        </div>
        <div class="col-md-4">
          <ButtonStyleSection />
        </div>
        <div class="col-md-4">
          <JustifyParagraphSection />
        </div>

        {/* <!-- Seconda riga --> */}
        <div class="col-md-6">
          <MessageByLanguageSection />
        </div>
        <div class="col-md-6">
          <ToDoListSection />
        </div>
      </div>
      <hr className="border-2" />
      <h2 className="text-uppercase text-center">Parte II</h2>
      <div class="row g-3">
        {/* <!-- Terza --> */}
        <div class="col-md-4">
          <CharacterCounterSection />
        </div>
        <div class="col-md-4">Element</div>
        <div class="col-md-4">Element</div>

        {/* <!-- Quarta riga --> */}
        <div class="col-md-6">Element</div>
        <div class="col-md-6">Element</div>
      </div>
      <hr className="border" />
    </main>
  );
}

/* 2. filtra istantaneamente un array di nomi visualizzati a schermo mostrando solo quelli che contengono la stringa digitata nell'input
 */

/* 3. aggiorna il contenuto di un tag <h1> con il testo inserito dall'utente in una casella di input,
sostituendo il valore precedente ad ogni modifica
 */

/* 4. unisci in tempo reale il valore di due input distinti (nome e cognome)
visualizzando il risultato completo in un unico elemento di testo
 */

/* 5. mantieni disabilitato un pulsante di azione finché l'utente non spunta
una specifica casella di controllo per confermare la volontà di procedere
 */

/* 6. applica o rimuovi uno stile specifico (es. grassetto, corsivo, sottolineato, evidenziato)
ad un testo target quando la checkbox associata viene attivata o disattivata
 */

/* 7. ridimensiona il testo della pagina in base al radio button selezionato dall'utente
 */

/* 8. converti e mostra il prezzo di un prodotto fisso in diverse valute (EUR, USD, GBP)
aggiornando il simbolo e il valore in base alla select
 */

/* 9. mostra il numero di caratteri rimanenti da scrivere
durante la digitazione in una textarea
 */

/* 10. mostra degli avvisi riguardo la quantità di testo
scritto in una textarea (es. troppo corto, troppo lungo, lunghezza ottimale) */
