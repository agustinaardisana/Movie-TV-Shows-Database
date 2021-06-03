import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";

const MoviesCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const MoviesCategory = () => {
  let location = useLocation();
  const mediaType = "movie";
  const category = location.state.category;
  const info = useFetch(category, mediaType);
  const title = generateTitle(mediaType, category);

  return (
    <MoviesCategoryContainer>
      <CardSection
        title={title}
        mediaType={mediaType}
        info={info}
      ></CardSection>
    </MoviesCategoryContainer>
  );
};

export default MoviesCategory;
