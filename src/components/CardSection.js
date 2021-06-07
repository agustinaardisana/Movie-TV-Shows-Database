import { Link } from "react-router-dom";
import styled from "styled-components";
//
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
//
import { Flex } from "./Commons";
import CardContainer from "./CardContainer";

const SectionContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const TitleContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const StyledSpan = styled.span`
  transition: all 0.3s ease 0s;
`;

const StyledLink = styled(Link)`
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  line-height: 20px;
  padding-left: calc(${(props) => props.theme.spacing.sm} * 2);

  &:hover ${StyledSpan} {
    transform: scale(1.1) translateX(10px);
  }
`;

const StyledTitle = styled.h2`
  /* display: flex; */
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
  const isPreview = !isSearch && preview;
  return (
    <SectionContainer
      as="section"
      flexDirection="column"
      justifyContent="center"
    >
      <TitleContainer>
        {isPreview ? (
          <StyledLink to={`/${mediaType}/${category}/page/1`}>
            <StyledTitle>{title}</StyledTitle>
            <StyledSpan>
              <ArrowForwardIosIcon />
            </StyledSpan>
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
