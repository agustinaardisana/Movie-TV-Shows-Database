import useFetch from "../utils/hooks/useFetch";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Flex, FlexCenter } from "../components/Commons";

const StyledSection = styled(Flex)`
  margin: ${(props) => props.theme.spacing.lg} 0;
  padding: 0 ${(props) => props.theme.spacing.md};
`;

const Container = styled(Flex)`
  margin: ${(props) => props.theme.spacing.sm};
`;

const StyledIFrame = styled.iframe`
  width: 640px;
  height: 360px;
  border: none;
`;

const Title = styled.h4`
  font-family: ${(props) => props.theme.fonts.families.title};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
  color: ${(props) => props.theme.colors.primary};
  margin-top: ${(props) => props.theme.spacing.sm};
  max-width: 640px;
`;

const Videos = () => {
  const location = useLocation();
  const mediaType = location.state.mediaType;
  const id = location.state.id;
  const info = useFetch(id, mediaType, "videos");
  console.log(info);

  const createSource = (site) => {
    return site === "YouTube" && "https://www.youtube.com/embed/";
  };

  return (
    <StyledSection as="section" justifyContent="center">
      {info.map((video) => (
        <Container as="article" flexDirection="column">
          <StyledIFrame
            id={video.id}
            key={video.id}
            title={video.name}
            src={`${createSource(video.site)}${video.key}`}
          ></StyledIFrame>
          <Title>{video.name}</Title>
        </Container>
      ))}
    </StyledSection>
  );
};

export default Videos;
