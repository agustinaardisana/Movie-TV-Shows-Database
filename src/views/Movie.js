import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import { showPreview } from "../utils/variables";
import { useLocation } from "react-router-dom";

const MoviesContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const Movie = () => {
  const mediaType = "movie";
  const infoPopular = useFetch("popular", mediaType);
  const infoTopRated = useFetch("top_rated", mediaType);
  const infoUpcoming = useFetch("upcoming", mediaType);
  const infoNowPlaying = useFetch("now_playing", mediaType);
  let location = useLocation();
  const isPreview = showPreview(location.pathname);

  return (
    <MoviesContainer>
      <CardSection
        title="Peliculas Populares"
        mediaType={mediaType}
        info={infoPopular}
        category="popular"
        preview={isPreview}
      ></CardSection>
      <CardSection
        title="Peliculas con mejores criticas"
        mediaType={mediaType}
        info={infoTopRated}
        category="top_rated"
        preview={isPreview}
      ></CardSection>
      <CardSection
        title="Peliculas a estrenar"
        mediaType={mediaType}
        info={infoUpcoming}
        category="upcoming"
        preview={isPreview}
      ></CardSection>
      <CardSection
        title="Peliculas en cine"
        mediaType={mediaType}
        info={infoNowPlaying}
        category="now_playing"
        preview={isPreview}
      ></CardSection>
    </MoviesContainer>
  );
};

export default Movie;
