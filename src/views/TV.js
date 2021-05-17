import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import CardSection from "../components/CardSection";

const TVContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const TV = () => {
  const mediaType = "tv";
  const infoPopular = useFetch("popular", mediaType);
  const infoTopRated = useFetch("top_rated", mediaType);
  const infoOnTheAir = useFetch("on_the_air", mediaType);

  return (
    <TVContainer>
      <CardSection
        title="Series Populares"
        mediaType={mediaType}
        info={infoPopular}
        category="popular"
      ></CardSection>
      <CardSection
        title="Series con mejores criticas"
        mediaType={mediaType}
        info={infoTopRated}
        category="top_rated"
      ></CardSection>
      <CardSection
        title="Series al aire"
        mediaType={mediaType}
        info={infoOnTheAir}
        category="on_the_air"
      ></CardSection>
    </TVContainer>
  );
};

export default TV;
