import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
  }

  return (
    <main className="app">
      {/* <ul className="animal_list">
        {animals.map((animal) => (
          <li key={animal.id}>
            <span>
              {" "}
              {animal.name} {animal.emoji}{" "}
            </span>
          </li>
        ))}
      </ul> */}
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
/* <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} /> */
