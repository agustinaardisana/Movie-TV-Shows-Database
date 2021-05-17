import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import CardSection from "../components/CardSection";

const MoviesContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Movie = () => {
  const mediaType = "movie";
  const infoPopular = useFetch("popular", mediaType);
  const infoTopRated = useFetch("top_rated", mediaType);
  const infoUpcoming = useFetch("upcoming", mediaType);
  const infoNowPlaying = useFetch("now_playing", mediaType);

  return (
    <MoviesContainer>
      <CardSection
        title="Peliculas Populares"
        mediaType={mediaType}
        info={infoPopular}
        category="popular"
      ></CardSection>
      <CardSection
        title="Peliculas con mejores criticas"
        mediaType={mediaType}
        info={infoTopRated}
        category="top_rated"
      ></CardSection>
      <CardSection
        title="Peliculas a estrenar"
        mediaType={mediaType}
        info={infoUpcoming}
        category="upcoming"
      ></CardSection>
      <CardSection
        title="Peliculas en cine"
        mediaType={mediaType}
        info={infoNowPlaying}
        category="now_playing"
      ></CardSection>
    </MoviesContainer>
  );
};

export default Movie;
