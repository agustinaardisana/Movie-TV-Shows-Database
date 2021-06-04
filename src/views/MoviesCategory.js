import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";
import BasicPagination from "../components/BasicPagination";
import { useState } from "react";

const MoviesCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const MoviesCategory = () => {
  let history = useHistory();
  let params = useParams();
  const mediaType = "movie";
  const category = params.category;
  const [pageNumber, setPageNumber] = useState(1);
  const { info, totalPages } = useFetch(
    category,
    mediaType,
    "",
    `&page=${pageNumber}`
  );
  const title = generateTitle(mediaType, category);

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    history.push(`/${mediaType}/${category}/page/${value}`);
  };

  return (
    <MoviesCategoryContainer>
      <CardSection
        title={title}
        mediaType={mediaType}
        info={info}
        category={category}
      ></CardSection>
      <BasicPagination
        totalPages={totalPages}
        changePageNumber={changePageNumber}
        pageNumber={pageNumber}
      />
    </MoviesCategoryContainer>
  );
};

export default MoviesCategory;
