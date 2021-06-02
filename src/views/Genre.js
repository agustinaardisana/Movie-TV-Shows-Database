import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import CardContainer from "../components/CardContainer";

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
  const optionalQuery = `&page=1&with_genres=${genreId}`;
  const { info } = useFetch("", mediaType, "", optionalQuery);

  return (
    <MainContainer>
      <SectionContainer>
        <Title>Género: {genreName}</Title>
        <CardContainer mediaType={mediaType} info={info}></CardContainer>
      </SectionContainer>
    </MainContainer>
  );
};

export default Genre;
