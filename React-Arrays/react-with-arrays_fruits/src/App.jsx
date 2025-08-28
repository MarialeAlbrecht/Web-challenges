import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 0,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 2,
      name: "🥝 Kiwi",
      color: "green",
    },
    {
      id: 3,
      name: "🍊 Tangerine",
      color: "orange",
    },
    {
      id: 4,
      name: "🍓 Strawberry",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <Card name={fruit.name} color={fruit.color} />
        </li>
      ))}
    </div>
  );
}
