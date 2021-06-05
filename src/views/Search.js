import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
//
import BasicPagination from "../components/BasicPagination";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { StyledImg } from "../components/Commons";
//
import results_not_available from "../assets/results_not_available.svg";

const SearchContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.families.title};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fonts.sizes.h2};
`;

const Img = styled(StyledImg)`
  /* css */
`;

const Search = () => {
  const history = useHistory();
  const params = useParams();
  const searchedValue = params.searchedValue;
  const isSearch = searchedValue && true;
  const [pageNumber, setPageNumber] = useState(1);
  const optionalQuery = `&query=${searchedValue}&page=${pageNumber}`;
  const { info, totalPages } = useFetch("multi", "search", "", optionalQuery);

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    history.push(`/search/multi/${searchedValue}/page/${value}`);
  };

  return (
    <SearchContainer>
      {info.length ? (
        <>
          <CardSection
            title={`Resultados para: ${searchedValue}`}
            isSearch={isSearch}
            info={info}
          ></CardSection>
          <BasicPagination
            totalPages={totalPages}
            changePageNumber={changePageNumber}
            pageNumber={pageNumber}
          />
        </>
      ) : (
        <>
          <StyledTitle>
            Lo sentimos, no hay resultados disponibles para: {searchedValue}
          </StyledTitle>
          <Img
            src={results_not_available}
            alt="No se han encontrado resultados"
          />
        </>
      )}
    </SearchContainer>
  );
};

export default Search;
