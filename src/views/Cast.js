import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledSection = styled.section`
  margin: ${(props) => props.theme.spacing.lg} 0;
  padding: 0 ${(props) => props.theme.spacing.md};
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
