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
  padding-left: calc(${(props) => props.theme.spacing.sm} * 2);
`;

const CardSection = ({ title, mediaType, info, category, preview }) => {
  return (
    <SectionContainer
      as="section"
      flexDirection="column"
      justifyContent="center"
    >
      <TitleContainer>
        <StyledLink
          to={{
            pathname: `/${mediaType}/${category}/page/1`,
            state: { category: { category } },
          }}
        >
          <h2>{title}</h2>
          <ArrowForwardIosIcon />
        </StyledLink>
      </TitleContainer>
      <CardContainer mediaType={mediaType} info={info} preview={preview} />
    </SectionContainer>
  );
};

export default CardSection;
