import styled from "styled-components";
//
import CardContainer from "../components/CardContainer";
import useFetch from "../utils/hooks/useFetch";
import Loader from "../components/Loader";
import { notAvailable } from "../utils/variables";

const StyledSection = styled.section`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Title = styled.h4`
  font-family: ${(props) => props.theme.fonts.families.title};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  color: ${(props) => props.theme.colors.text};
  margin-top: ${(props) => props.theme.spacing.sm};
  max-width: 640px;

  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    font-size: ${(props) => props.theme.fonts.sizes.p};
  }
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
          {info.length ? (
            <CardContainer
              mediaType={mediaType}
              info={info}
              isBlueBackground={isBlueBackground}
            />
          ) : (
            <Title>{notAvailable}</Title>
          )}
        </StyledSection>
      )}
    </>
  );
};

export default Similar;
