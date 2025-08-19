import { Header } from "./components/header.js";
import { Form } from "./components/form.js";
import { CardList } from "./components/cardlist.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
