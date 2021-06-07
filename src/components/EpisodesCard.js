import styled from "styled-components";
//
import imgNotAvailable from "../assets/picture_not_available.png";

const StyledArticle = styled.article`
  width: calc(30%);
  margin: 20px ${(props) => props.theme.spacing.sm};

  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    width: calc(50% - 20px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.extraSmall}) {
    width: ${(props) => props.theme.width.full};
  }
`;

const StyledImg = styled.img`
  width: ${(props) => props.theme.width.full};
  height: auto;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.radius.regular};
`;
const StyledTitle = styled.h3`
  color: ${(props) => props.theme.colors.link};
  font-family: ${(props) => props.theme.fonts.families.title};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.fonts.sizes.h3};
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

const StyledText = styled.p`
  color: ${(props) => props.theme.colors.text};
`;

const EpisodesCard = ({ info }) => {
  return (
    <StyledArticle>
      <StyledImg
        src={
          info.still_path
            ? `https://image.tmdb.org/t/p/w400/${info.still_path}`
            : imgNotAvailable
        }
        alt={info.name}
      />
      <StyledTitle>
        S{info.season_number}E{info.episode_number}
        <StyledSpan> {info.name}</StyledSpan>
      </StyledTitle>
      <StyledText>{info.overview}</StyledText>
    </StyledArticle>
  );
};

export default EpisodesCard;
