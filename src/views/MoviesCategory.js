import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
//
import BasicPagination from "../components/BasicPagination";
import CardSection from "../components/CardSection";
import { generateTitle } from "../utils/variables";
import Loader from "../components/Loader";
import useFetch from "../utils/hooks/useFetch";

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
  const { info, totalPages, isLoading } = useFetch(
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default MoviesCategory;
