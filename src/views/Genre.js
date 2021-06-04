import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/CardContainer";
import BasicPagination from "../components/BasicPagination";
import { useState } from "react";

const MainContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const SectionContainer = styled.section`
  /* style */
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  padding-left: ${(props) => props.theme.spacing.md};
`;

const Genre = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const genreId = location.state.genreId;
  const genreName = location.state.genreName;
  const [pageNumber, setPageNumber] = useState(1);
  const optionalQuery = `&with_genres=${genreId}&page=${pageNumber}`;
  const { info, totalPages } = useFetch("", mediaType, "", optionalQuery);

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    // history.push(`/${mediaType}/${category}/page/${number}`);
  };

  return (
    <MainContainer>
      <SectionContainer>
        <Title>Género: {genreName}</Title>
        <CardContainer mediaType={mediaType} info={info}></CardContainer>
      </SectionContainer>
      <BasicPagination
        totalPages={totalPages}
        changePageNumber={changePageNumber}
        pageNumber={pageNumber}
      />
    </MainContainer>
  );
};

export default Genre;
