import styled from "styled-components";
//
import { Flex } from "../components/Commons";
import { notAvailable } from "../utils/variables";
import useFetch from "../utils/hooks/useFetch";

const StyledSection = styled(Flex)`
  padding: ${(props) => props.theme.spacing.lg}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
`;

const Container = styled(Flex)`
  margin: ${(props) => props.theme.spacing.sm};

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    max-width: 480px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    max-width: 320px;
  }
`;

const StyledIFrame = styled.iframe`
  width: 640px;
  height: 360px;
  border: none;

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: 480px;
    height: 270px;
  }

  @media (max-width: 490px) {
    width: 320px;
    height: 180px;
  }

  @media (max-width: 340px) {
    width: 160px;
    height: 90px;
  }
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

const Videos = ({ mediaType, id }) => {
  const { info } = useFetch(id, mediaType, "videos");

  const createSource = (site) => {
    let link = "";
    if (site === "YouTube") {
      link = "https://www.youtube.com/embed/";
    } else if (site === "Vimeo") {
      link = "https://vimeo.com/";
    }
    return link;
  };

  return (
    <StyledSection as="section" justifyContent="center" flexWrap="wrap">
      {info.length !== 0 ? (
        info.map((video) => (
          <Container as="article" flexDirection="column" key={video.id}>
            <StyledIFrame
              id={video.id}
              key={video.id}
              title={video.name}
              src={`${createSource(video.site)}${video.key}`}
            ></StyledIFrame>
            <Title>{video.name}</Title>
          </Container>
        ))
      ) : (
        <Title>{notAvailable}</Title>
      )}
    </StyledSection>
  );
};

export default Videos;
