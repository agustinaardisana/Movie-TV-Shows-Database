import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Flex } from "./Commons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CardContainer from "./CardContainer";

const SectionContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const TitleContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const StyledLink = styled(Link)`
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  line-height: 20px;
`;

const CardSection = ({ title, dataMovies, dataTV, mediaType }) => {
  let location = useLocation();
  console.log(location);
  return (
    <SectionContainer
      as="section"
      flexDirection="column"
      justifyContent="center"
    >
      <TitleContainer>
        <StyledLink to={`/${mediaType}/trending/page/1`}>
          <h2>{title}</h2>
          <ArrowForwardIosIcon />
        </StyledLink>
      </TitleContainer>
      <CardContainer
        dataMovies={dataMovies}
        dataTV={dataTV}
        mediaType={mediaType}
      />
    </SectionContainer>
  );
};

export default CardSection;
