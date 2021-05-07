import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "./Commons";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

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

const CardContainer = styled(Flex)`
  width: ${(props) => props.theme.width.full};
`;

const Card = styled.article`
  width: 250px;
  margin: ${(props) => props.theme.spacing.sm};
  border-radius: 8px;
`;

const Img = styled.img`
  width: ${(props) => props.theme.width.full};
  height: auto;
  border-radius: 8px;
  transition: all 0.3s ease 0s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardSection = ({ title }) => {
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
      <CardContainer justifyContent="center" flexWrap="wrap">
        <Card>
          <Img src="https://image.tmdb.org/t/p/w500/1Lt6cbfnPIj4mAYYwErQtevhv42.jpg"></Img>
        </Card>
        <Card>
          <Img src="https://image.tmdb.org/t/p/w500/1Lt6cbfnPIj4mAYYwErQtevhv42.jpg"></Img>
        </Card>
        <Card>
          <Img src="https://image.tmdb.org/t/p/w500/1Lt6cbfnPIj4mAYYwErQtevhv42.jpg"></Img>
        </Card>
        <Card>
          <Img src="https://image.tmdb.org/t/p/w500/1Lt6cbfnPIj4mAYYwErQtevhv42.jpg"></Img>
        </Card>
        <Card>
          <Img src="https://image.tmdb.org/t/p/w500/1Lt6cbfnPIj4mAYYwErQtevhv42.jpg"></Img>
        </Card>
      </CardContainer>
    </SectionContainer>
  );
};

export default CardSection;
