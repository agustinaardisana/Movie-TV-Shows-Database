import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Cast = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const info = useFetch(id, mediaType, "credits");
  const cast = info && info.cast;

  return (
    <StyledSection>
      {cast && (
        <CardContainer mediaType={mediaType} info={cast} isCast={true} />
      )}
    </StyledSection>
  );
};

export default Cast;
