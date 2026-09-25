/* Visualizza un messaggio di benvenuto che si aggiorni in tempo reale
scegliendo tra diverse lingue tramite una serie di bottoni dedicati*/

import { useState } from "react";

const messages = [
  {
    id: "it",
    label: "Italiano",
    body: "Benvenuto",
    color: "success",
  },
  {
    id: "en",
    label: "Inglese",
    body: "Welcome",
    color: "info",
  },
  {
    id: "fr",
    label: "Francese",
    body: "Accueillir",
    color: "secondary",
  },
  {
    id: "de",
    label: "Tedesco",
    body: "Willkommen",
    color: "warning",
  },
  {
    id: "es",
    label: "Spagnolo",
    body: "Bienvenido",
    color: "danger",
  },
];

export default function MessageByLanguageSection() {
  const [language, setLanguage] = useState("it");

  function handleLanguage(newLanguage) {
    setLanguage(newLanguage);
  }
  const currentMessage = messages.find((msg) => msg.id === language);
  return (
    <section className="bg-secondary-subtle mb-3 text-center py-2">
      <h2>Message In Your Language</h2>
      <h4 className="fst-italic">{currentMessage.body}</h4>
      <div className="btn-group">
        {messages.map((message) => (
          <button
            key={message.id}
            onClick={() => handleLanguage(message.id)}
            className={`btn btn-${message.color} me-1`}
          >
            {message.label}
          </button>
        ))}
      </div>
    </section>
  );
}
