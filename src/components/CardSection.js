import styled from "styled-components";
import { Link } from "react-router-dom";
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

const CardSection = ({ title, dataMovies, dataTV }) => {
  return (
    <SectionContainer
      as="section"
      flexDirection="column"
      justifyContent="center"
    >
      <TitleContainer>
        <StyledLink>
          <h2>{title}</h2>
          <ArrowForwardIosIcon />
        </StyledLink>
      </TitleContainer>
      <CardContainer dataMovies={dataMovies} dataTV={dataTV} />
    </SectionContainer>
  );
};

export default CardSection;
