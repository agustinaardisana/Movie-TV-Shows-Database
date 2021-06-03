import { useLocation, useHistory } from "react-router-dom";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { generateTitle } from "../utils/variables";
import BasicPagination from "../components/BasicPagination";
import { useState } from "react";

const MoviesCategoryContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const MoviesCategory = () => {
  let history = useHistory();
  let location = useLocation();
  const mediaType = "movie";
  const category = location.state.category;
  console.log(category);
  const [pageNumber, setPageNumber] = useState(1);
  const { info, totalPages } = useFetch(
    category,
    mediaType,
    "",
    `&page=${pageNumber}`
  );
  const title = generateTitle(mediaType, category);

  const changePageNumber = (number) => {
    setPageNumber(number);
    // history.push(`/${mediaType}/${category}/page/${number}`);
    console.log(category);
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
