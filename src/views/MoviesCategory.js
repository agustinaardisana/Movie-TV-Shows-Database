import { useLocation } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";
import BasicPagination from "../components/BasicPagination";

const MoviesCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const MoviesCategory = () => {
  let location = useLocation();
  const mediaType = "movie";
  const category = location.state.category;
  const { info, totalPages } = useFetch(category, mediaType);
  const title = generateTitle(mediaType, category);
  console.log(totalPages);

  return (
    <MoviesCategoryContainer>
      <CardSection
        title={title}
        mediaType={mediaType}
        info={info}
      ></CardSection>
      <BasicPagination totalPages={totalPages} />
    </MoviesCategoryContainer>
  );
};

export default MoviesCategory;
