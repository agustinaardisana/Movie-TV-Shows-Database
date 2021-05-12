import styled from "styled-components";
import { FlexCenter } from "./Commons";
import { Link } from "react-router-dom";

const TitleContainer = styled(FlexCenter)`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  background: linear-gradient(
    transparent,
    ${(props) => props.theme.colors.primary}
  );
  padding: ${(props) => props.theme.spacing.xs};
  width: ${(props) => props.theme.width.full};
  height: auto;
  min-height: 60px;
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
  width: 18%;
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

  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    width: 22%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    width: 30%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: 45%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    width: 90%;
  }
`;

const Img = styled.img`
  width: ${(props) => props.theme.width.full};
  height: auto;
  border-radius: ${(props) => props.theme.radius.regular};
`;

const CardTitle = styled.h2``;

const Card = ({ item, mediaType }) => {
  return (
    <StyledCard>
      <Link to={`/${mediaType}/${item.id}/info`}>
        <Img
          src={
            `https://image.tmdb.org/t/p/original/${item.poster_path}` ||
            "https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg"
          }
          alt={item.title || item.name}
        />
        <TitleContainer>
          <CardTitle>{item.title || item.name}</CardTitle>
        </TitleContainer>
      </Link>
    </StyledCard>
  );
};

export default Card;
