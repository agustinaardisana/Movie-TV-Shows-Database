import styled from "styled-components";
import CardSection from "../components/CardSection";
import { useHistory } from "react-router-dom";
import useFetch from "../utils/hooks/useFetch";

const SearchContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.sm};
`;

const Search = () => {
  const history = useHistory();
  const searchedValue = history.location.search.slice(1);
  const isSearch = searchedValue && true;
  const optionalQuery = `&query=${searchedValue}&page=1`;
  const info = useFetch("multi", "search", "", optionalQuery);

  return (
    <SearchContainer>
      <CardSection
        title={`Resultados para: ${searchedValue}`}
        isSearch={isSearch}
        info={info}
      ></CardSection>
    </SearchContainer>
  );
};

export default Search;
