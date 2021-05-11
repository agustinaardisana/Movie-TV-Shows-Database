import styled from "styled-components";
import CardSection from "../components/CardSection";

const SearchContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Search = () => {
  return (
    <SearchContainer>
      <CardSection
        title="Resultados para:"
        // dataMovies={dataMovies}
        mediaType="movie"
      ></CardSection>
    </SearchContainer>
  );
};

export default Search;
