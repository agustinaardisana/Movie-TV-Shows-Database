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

const StyledTitle = styled.h2`
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  line-height: 20px;
  padding-left: calc(${(props) => props.theme.spacing.sm} * 2);
`;

const CardSection = ({
  title,
  mediaType,
  info,
  category,
  preview,
  isSearch,
}) => {
  console.log(category);
  return (
    <SectionContainer
      as="section"
      flexDirection="column"
      justifyContent="center"
    >
      <TitleContainer>
        {!isSearch ? (
          <StyledLink
            to={{
              pathname: `/${mediaType}/${category}/page/1`,
              state: { category: `${category}` },
            }}
          >
            <h2>{title}</h2>
            <ArrowForwardIosIcon />
          </StyledLink>
        ) : (
          <StyledTitle>{title}</StyledTitle>
        )}
      </TitleContainer>
      <CardContainer
        mediaType={mediaType}
        info={info}
        preview={preview}
        isSearch={isSearch}
      />
    </SectionContainer>
  );
};

export default CardSection;
