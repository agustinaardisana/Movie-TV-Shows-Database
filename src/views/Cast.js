import styled from "styled-components";
//
import CardContainer from "../components/CardContainer";
import Loader from "../components/Loader";
import useFetch from "../utils/hooks/useFetch";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Cast = ({ mediaType, id }) => {
  const { info, isLoading } = useFetch(id, mediaType, "credits");
  const cast = info && info.cast;
  const isBlueBackground = true;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <StyledSection>
          {cast && (
            <CardContainer
              mediaType={mediaType}
              info={cast}
              isCast={true}
              isBlueBackground={isBlueBackground}
            />
          )}
        </StyledSection>
      )}
    </>
  );
};

export default Cast;
