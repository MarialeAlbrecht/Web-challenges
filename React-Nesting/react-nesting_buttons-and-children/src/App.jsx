import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me</Button>
      <Button>Don&apos;t click</Button>
      <Button>Maybe click?</Button>
      <Button>My name&apos;s Jeff</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
