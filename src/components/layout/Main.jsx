import ButtonStyleSection from "../sections/ButtonStyleSection";
import CounterSection from "../sections/CounterSection";
import JustifyParagraphSection from "../sections/JustifyParagraphSection";
import MessageByLanguageSection from "../sections/MessageByLanguageSection";

export default function Main() {
  return (
    <section className="container">
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
        <div class="col-md-6">Elemento 5</div>
      </div>
    </section>

    /* Genera una lista di attività permettendo di segnare ogni elemento
come completato applicando una classe con stile testuale barrato quando
clicchiamo sull'elemento in questione.*/
  );
}
