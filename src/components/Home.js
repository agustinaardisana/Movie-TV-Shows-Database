import styled from "styled-components";
import { FlexCenter } from "./Commons";
import CardSection from "./CardSection";

const HomeContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Home = () => {
  return (
    <>
      {" "}
      <HomeContainer>
        <CardSection title="Peliculas que son tendencia" />
        <CardSection title="Series que son tendencia" />
      </HomeContainer>
      ;
    </>
  );
};

export default Home;
