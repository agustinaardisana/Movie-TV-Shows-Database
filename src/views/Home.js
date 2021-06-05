import { useLocation } from "react-router-dom";
import styled from "styled-components";
//
import CardSection from "../components/CardSection";
import { showPreview } from "../utils/variables";
import useFetch from "../utils/hooks/useFetch";

const HomeContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const Home = () => {
  let location = useLocation();
  const mediaTypeMovie = "movie";
  const mediaTypeTV = "tv";
  const { info: infoMovie } = useFetch(location.pathname, mediaTypeMovie);
  const { info: infoTV } = useFetch(location.pathname, mediaTypeTV);
  const isPreview = showPreview(location.pathname);
  return (
    <>
      <HomeContainer>
        <CardSection
          title="Peliculas que son tendencia"
          mediaType={mediaTypeMovie}
          info={infoMovie}
          category="trending"
          preview={isPreview}
        />
        <CardSection
          title="Series que son tendencia"
          mediaType={mediaTypeTV}
          info={infoTV}
          category="trending"
          preview={isPreview}
        />
      </HomeContainer>
      ;
    </>
  );
};

export default Home;
