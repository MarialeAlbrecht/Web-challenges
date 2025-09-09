import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const rooms = [
  { id: 1, name: "Living room", lightRooms: false },
  { id: 2, name: "Kitchen", lightRooms: false },
  { id: 3, name: "Bedroom", lightRooms: false },
  { id: 4, name: "Bathroon", lightRooms: false },
  { id: 5, name: "Garage", lightRooms: false },
  { id: 6, name: "Porch", lightRooms: false },
  { id: 7, name: "Garden", lightRooms: false },
  { id: 8, name: "Office", lightRooms: false },
];

export default function App({ Component, pageProps }) {
  const [lightRooms, setLightRooms] = useState(rooms);

  function handleLightOn(id) {
    setLightRooms((prev) =>
      prev.map((room) =>
        room.id === id ? { ...room, lightRooms: true } : room
      )
    );
  }

  function handleLightOff(id) {
    setLightRooms((prev) =>
      prev.map((room) =>
        room.id === id ? { ...room, lightRooms: false } : room
      )
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lightRooms={lightRooms}
        handleLightOff={handleLightOff}
        handleLightOn={handleLightOn}
      />
    </Layout>
  );
}
