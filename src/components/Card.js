import { Link } from "react-router-dom";
import styled from "styled-components";
//
import { FlexCenter, StyledImg } from "./Commons";
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

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    transform: unset;
    position: unset;
    background: unset;
    opacity: unset;
  }
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
    width: calc(25% - 6px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    width: calc(33% - 6px);
    transform: unset;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: calc(50% - 6px);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    width: ${(props) => props.theme.width.full};
  }
`;

const Img = styled(StyledImg)`
  border-radius: ${(props) => props.theme.radius.regular};
`;

const CardTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    color: ${(props) => (props.isPerson ? "#fff" : "#032541")};
  }
`;

const Card = ({ item, mediaType, isCast }) => {
  const isPerson = isCast || mediaType === "person";

  return (
    <StyledCard>
      {isPerson && (
        <Link to={`/person/${item.id}/info`}>
          <Img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w342/${item.profile_path}`
                : imgNotAvailable
            }
            alt={item.name}
          />
          <TitleContainer>
            <CardTitle isPerson={isPerson}>{item.title || item.name}</CardTitle>
          </TitleContainer>
        </Link>
      )}
      {!isPerson && (
        <Link to={`/${mediaType}/${item.id}/info`}>
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
