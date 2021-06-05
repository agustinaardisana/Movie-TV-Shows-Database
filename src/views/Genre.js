import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
//
import BasicPagination from "../components/BasicPagination";
import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";

const MainContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  padding-left: ${(props) => props.theme.spacing.md};
`;

const Genre = () => {
  const params = useParams();
  const history = useHistory();
  const mediaType = params.mediaType;
  const genreId = params.genreId;
  const genreName = params.genre;
  const [pageNumber, setPageNumber] = useState(1);
  const optionalQuery = `&with_genres=${genreId}&page=${pageNumber}`;
  const { info, totalPages } = useFetch("", mediaType, "", optionalQuery);

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    history.push(`/${mediaType}/${genreName}/${genreId}/page/${value}`);
  };

  return (
    <MainContainer>
      <section>
        <Title>Género: {genreName}</Title>
        <CardContainer mediaType={mediaType} info={info}></CardContainer>
      </section>
      <BasicPagination
        totalPages={totalPages}
        changePageNumber={changePageNumber}
        pageNumber={pageNumber}
      />
    </MainContainer>
  );
};

export default Genre;
