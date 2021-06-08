import styled from "styled-components";
//
import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";
import Loader from "../components/Loader";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Similar = ({ mediaType, id }) => {
  const { info, isLoading } = useFetch(id, mediaType, "similar");
  const isBlueBackground = true;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledSection>
          {info && (
            <CardContainer
              mediaType={mediaType}
              info={info}
              isBlueBackground={isBlueBackground}
            />
          )}
        </StyledSection>
      )}
    </>
  );
};

export default Similar;
