import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";

const MoviesCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const MoviesCategory = () => {
  let location = useLocation();
  const mediaType = "movie";
  const info = useFetch(location.pathname, mediaType);
  const category = location.state.category.category;
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
