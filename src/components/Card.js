import { Link } from "react-router-dom";
import styled from "styled-components";
//
import { FlexCenter } from "./Commons";
//
import imgNotAvailable from "../assets/picture_not_available.png";

const TitleContainer = styled(FlexCenter)`
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
  width: calc(19%);
  margin: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.xxs};
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

const CardTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
`;

const Card = ({ item, mediaType, isCast }) => {
  return (
    <StyledCard>
      {isCast && (
        <Link
          to={{
            pathname: `/person/${item.id}/info`,
            state: { id: `${item.id}` },
          }}
        >
          <Img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w342/${item.profile_path}`
                : imgNotAvailable
            }
            alt={item.name}
          />
          <TitleContainer>
            <CardTitle>{item.title || item.name}</CardTitle>
          </TitleContainer>
        </Link>
      )}
      {!isCast && (
        <Link
          to={{
            pathname: `/${mediaType}/${item.id}/info`,
            state: { id: `${item.id}` },
          }}
        >
          <Img
            src={
              item.poster_path
                ? `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${item.poster_path}`
                : imgNotAvailable
            }
            alt={item.title || item.name}
          />
          <TitleContainer>
            <CardTitle>{item.title || item.name}</CardTitle>
          </TitleContainer>
        </Link>
      )}
    </StyledCard>
  );
};

export default Card;
