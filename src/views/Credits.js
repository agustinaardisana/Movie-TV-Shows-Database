import styled from "styled-components";
//
import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";

const StyledSection = styled.section`
  margin: ${(props) => props.theme.spacing.lg} 0;
  padding: 0 ${(props) => props.theme.spacing.md};
`;

const Credits = ({ mediaType, id }) => {
  const { info } = useFetch(id, mediaType, "combined_credits");
  const credits = info && info.cast;

  return (
    <StyledSection>
      {credits && <CardContainer mediaType={mediaType} info={credits} />}
    </StyledSection>
  );
};

export default Credits;
