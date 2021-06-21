import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
//
import BasicPagination from "../components/BasicPagination";
import CardSection from "../components/CardSection";
import useFetch from "../utils/hooks/useFetch";
import { StyledImg } from "../components/Commons";
import Loader from "../components/Loader";
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

const Search = () => {
  const history = useHistory();
  const params = useParams();
  const searchedValue = params.searchedValue;
  const isSearch = searchedValue && true;
  const [pageNumber, setPageNumber] = useState(1);
  const optionalQuery = `&query=${searchedValue}&page=${pageNumber}`;
  const { info, totalPages, isLoading } = useFetch(
    "multi",
    "search",
    "",
    optionalQuery
  );

  // si una variable asi te resulta mas clara, genial, pero te aviso que en general vas a ver en el codigo que 
  // los devs van a usar info.length y entender que eso significa "hay resultados"
  const thereAreResults = info.length;

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    history.push(`/search/multi/${searchedValue}/page/${value}`);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SearchContainer>
          {thereAreResults ? (
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
              <StyledImg
                src={results_not_available}
                alt="No se han encontrado resultados"
              />
            </>
          )}
        </SearchContainer>
      )}
    </>
  );
};

export default Search;
