import ButtonStyleSection from "../sections/ButtonStyleSection";
import CounterSection from "../sections/CounterSection";
import JustifyParagraphSection from "../sections/JustifyParagraphSection";
import MessageByLanguageSection from "../sections/MessageByLanguageSection";
import ToDoListSection from "../sections/ToDoListSection";

export default function Main() {
  return (
    <main className="container">
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
    </main>
  );
}
