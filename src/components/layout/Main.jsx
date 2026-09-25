import ButtonStyleSection from "../sections/ButtonStyleSection";
import CounterSection from "../sections/CounterSection";

export default function Main() {
  return (
    <section className="container">
      <div class="row g-3">
        {/* <!-- Prima riga (3 elementi da 4 colonne ciascuno = 12) --> */}
        <div class="col-md-4">
          <CounterSection />
        </div>
        <div class="col-md-4">
          <ButtonStyleSection />
        </div>
        <div class="col-md-4">Elemento 3</div>

        {/* <!-- Seconda riga (2 elementi da 6 colonne ciascuno = 12) --> */}
        <div class="col-md-6">Elemento 4</div>
        <div class="col-md-6">Elemento 5</div>
      </div>
    </section>

    /* Creare un componente con tre pulsanti ed un paragrafo.
Creare una variabile di stato reattiva per gestire l’allineamento del paragrafo.
Per ogni pulsante, impostare l’evento onClick e impostare l’allineamento in base al pulsante cliccato*/

    /* Visualizza un messaggio di benvenuto che si aggiorni in tempo reale
scegliendo tra diverse lingue tramite una serie di bottoni dedicati*/

    /* Genera una lista di attività permettendo di segnare ogni elemento
come completato applicando una classe con stile testuale barrato quando
clicchiamo sull'elemento in questione.*/
  );
}
