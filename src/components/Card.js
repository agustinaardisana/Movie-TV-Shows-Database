import styled from "styled-components";
import { FlexCenter } from "./Commons";

const TitleContainer = styled(FlexCenter)`
  color: ${(props) => props.theme.colors.text};
  background: linear-gradient(
    transparent,
    ${(props) => props.theme.colors.primary}
  );
  width: ${(props) => props.theme.width.full};
  height: 60px;
  border-bottom-right-radius: ${(props) => props.theme.radius.regular};
  border-bottom-left-radius: ${(props) => props.theme.radius.regular};
  position: ${(props) => props.theme.position.child};
  bottom: 0;
  left: 50%;
  opacity: 0;
  transform: translateY(100%) translateX(-50%);
  transition-duration: 1s;
`;

const StyledCard = styled.article`
  width: 250px;
  margin: ${(props) => props.theme.spacing.sm};
  position: ${(props) => props.theme.position.parent};
  overflow: hidden;
  transition: all 0.3s ease 0s;

  &:hover {
    transition-delay: 0.5s;
    transform: scale(1.25);
    z-index: 1;
  }

  &:hover ${TitleContainer} {
    transform: translateY(0) translateX(-50%);
    /* Elegir una de las dos transiciones siguientes */
    /* transition-delay: 0.75s; */
    transition: transform 0.35s;
    opacity: 1;
  }
`;

const Img = styled.img`
  width: ${(props) => props.theme.width.full};
  height: auto;
  border-radius: ${(props) => props.theme.radius.regular};
`;

const CardTitle = styled.h2``;

const Card = () => {
  return (
    <StyledCard>
      <Img src="https://image.tmdb.org/t/p/w500/1Lt6cbfnPIj4mAYYwErQtevhv42.jpg" />
      <TitleContainer>
        <CardTitle>Nombre Pelicula</CardTitle>
      </TitleContainer>
    </StyledCard>
  );
};

export default Card;
