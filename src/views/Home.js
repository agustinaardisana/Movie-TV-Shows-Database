import useFetch from "../utils/hooks/useFetch";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";

const HomeContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Home = () => {
  let location = useLocation();
  const mediaTypeMovie = "movie";
  const mediaTypeTV = "tv";
  const infoMovie = useFetch(location.pathname, mediaTypeMovie);
  const infoTV = useFetch(location.pathname, mediaTypeTV);

  return (
    <>
      <HomeContainer>
        <CardSection
          title="Peliculas que son tendencia"
          mediaType={mediaTypeMovie}
          info={infoMovie}
        />
        <CardSection
          title="Series que son tendencia"
          mediaType={mediaTypeTV}
          info={infoTV}
        />
      </HomeContainer>
      ;
    </>
  );
};

export default Home;
