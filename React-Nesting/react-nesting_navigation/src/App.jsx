import "./styles.css";

import Header from "./components/header";
import Avatar from "./components/avatar";
import Logo from "./components/logo";
import Navigation from "./components/navigation";
import Link from "./components/Link";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
