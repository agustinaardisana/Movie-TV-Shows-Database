import useFetch from "../utils/hooks/useFetch";
import styled from "styled-components";
import CardContainer from "../components/CardContainer";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Similar = ({ mediaType, id }) => {
  const { info } = useFetch(id, mediaType, "similar");

  return (
    <StyledSection>
      {info && <CardContainer mediaType={mediaType} info={info} />}
    </StyledSection>
  );
};

export default Similar;
