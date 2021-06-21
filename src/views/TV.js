import { useLocation } from "react-router-dom";
import styled from "styled-components";
//
import CardSection from "../components/CardSection";
import { showPreview } from "../utils/variables";
import useFetch from "../utils/hooks/useFetch";

const TVContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const TV = () => {
  const mediaType = "tv";
  const { info: infoPopular } = useFetch("popular", mediaType);
  const { info: infoTopRated } = useFetch("top_rated", mediaType);
  const { info: infoOnTheAir } = useFetch("on_the_air", mediaType);
  // const 
  let location = useLocation();
  const isPreview = showPreview(location.pathname);

  return (
    <TVContainer>
      <CardSection
        title="Series Populares"
        mediaType={mediaType}
        info={infoPopular}
        category="popular"
        preview={isPreview}
      ></CardSection>
      <CardSection
        title="Series con mejores criticas"
        mediaType={mediaType}
        info={infoTopRated}
        category="top_rated"
        preview={isPreview}
      ></CardSection>
      <CardSection
        title="Series al aire"
        mediaType={mediaType}
        info={infoOnTheAir}
        category="on_the_air"
        preview={isPreview}
      ></CardSection>
    </TVContainer>
  );
};

export default TV;
