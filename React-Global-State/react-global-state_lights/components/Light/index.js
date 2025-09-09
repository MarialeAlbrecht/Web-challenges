import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ lightRooms, handleLightOff, handleLightOn }) {
  // const [isOn, setIsOn] = useState(false);

  // function handleToggle(lightRooms, handleLightOff, handleLightOn) {

  const id = lightRoom.id;
  const name = lightRoom.name;
  const lightRooms = lightRoom.lightRooms;

  return (
    <LightButton
      type="button"
      onClick={() => {
        lightRooms ? handleLightOff(id) : handleLightOn(id);
      }}
      $isOn={lightRooms}
    >
      <Icon $isOn={lightRooms}>💡</Icon>
      <Text>
        <Name>{lightRooms.name}</Name>
        <State>{lightRooms ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
