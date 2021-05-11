import styled from "styled-components";
import CardSection from "../components/CardSection";

const TVContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const TV = () => {
  return (
    <TVContainer>
      <CardSection
        title="Series Populares"
        // dataMovies={dataMovies}
        mediaType="tv"
      ></CardSection>
      <CardSection
        title="Series con mejores criticas"
        // dataMovies={dataMovies}
        mediaType="tv"
      ></CardSection>
      <CardSection
        title="Series al aire"
        // dataMovies={dataMovies}
        mediaType="tv"
      ></CardSection>
    </TVContainer>
  );
};

export default TV;
