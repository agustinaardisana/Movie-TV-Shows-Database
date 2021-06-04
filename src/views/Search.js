import styled from "styled-components";
import CardSection from "../components/CardSection";
import { useHistory } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";
import BasicPagination from "../components/BasicPagination";
import { useState } from "react";

const SearchContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Search = () => {
  const history = useHistory();
  const searchedValue = history.location.search.slice(1);
  const isSearch = searchedValue && true;
  const [pageNumber, setPageNumber] = useState(1);
  const optionalQuery = `&query=${searchedValue}&page=${pageNumber}`;
  const { info, totalPages } = useFetch("multi", "search", "", optionalQuery);

  const changePageNumber = (e, value) => {
    setPageNumber(value);
    // history.push(`/${mediaType}/${category}/page/${number}`);
  };

  return (
    <SearchContainer>
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
    </SearchContainer>
  );
};

export default Search;
