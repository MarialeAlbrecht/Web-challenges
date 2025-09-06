import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
import styled from "styled-components";

export default function HomePage() {
  return (
    <Container>
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
