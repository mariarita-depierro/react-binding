/* Genera una lista di attività permettendo di segnare ogni elemento
come completato applicando una classe con stile testuale barrato quando
clicchiamo sull'elemento in questione.*/

import { useState } from "react";

import { initialActivities } from "../../lib/vars";

export default function ToDoListSection() {
  // 1. Inizializziamo lo stato con l'intero array di attività
  const [list, setList] = useState(initialActivities);

  // 2. Funzione per invertire il valore di 'completed' dell'elemento cliccato
  function handleToggle(id) {
    setList(
      list.map((activity) =>
        activity.id === id
          ? { ...activity, completed: !activity.completed }
          : activity,
      ),
    );
  }

  return (
    <section className="bg-success text-white p-2 mb-2">
      <h2>To Do List</h2>
      <ul>
        {list.map((activity) => (
          <li
            className={activity.completed ? "text-decoration-line-through" : ""}
            onClick={() => handleToggle(activity.id)}
            key={activity.id}
            style={{ cursor: "pointer" }}
          >
            {activity.toDo}
          </li>
        ))}
      </ul>
    </section>
  );
}
