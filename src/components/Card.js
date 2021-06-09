import { Link } from "react-router-dom";
import styled from "styled-components";
//
import { FlexCenter } from "./Commons";
import CardImage from "./CardImage";
//

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

    &:hover {
      transform: unset;
    }

    &:hover ${TitleContainer} {
      transform: unset;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    width: calc(50% - 10px);
  }
`;

const CardTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    color: ${(props) => (props.isBlueBackground ? "#fff" : "#032541")};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    font-size: ${(props) => props.theme.fonts.sizes.p};
  }
`;

const Card = ({ item, mediaType, isCast, isBlueBackground }) => {
  const isPerson = isCast || mediaType === "person";

  return (
    <StyledCard>
      {isPerson && (
        <Link to={`/person/${item.id}/info`}>
          <CardImage isPerson={isPerson} info={item} />
          <TitleContainer>
            <CardTitle isBlueBackground={isBlueBackground}>
              {item.title || item.name}
            </CardTitle>
          </TitleContainer>
        </Link>
      )}
      {!isPerson && (
        <Link to={`/${mediaType}/${item.id}/info`}>
          <CardImage isPerson={isPerson} info={item} />
          <TitleContainer>
            <CardTitle isBlueBackground={isBlueBackground}>
              {item.title || item.name}
            </CardTitle>
          </TitleContainer>
        </Link>
      )}
    </StyledCard>
  );
};

export default Card;
