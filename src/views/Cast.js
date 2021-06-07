import styled from "styled-components";
//
import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Cast = ({ mediaType, id }) => {
  const { info } = useFetch(id, mediaType, "credits");
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
