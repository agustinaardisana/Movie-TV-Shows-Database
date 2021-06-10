import styled from "styled-components";
//
import LinkIcon from "@material-ui/icons/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
//
import { Flex } from "./Commons";
import HiddenTitle from "./HiddenTitle";

const FlexContainer = styled(Flex)`
  padding-top: ${(props) => props.theme.spacing.sm};

  @media (max-width: 350px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  margin-right: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fonts.sizes.h1};
`;

const ExternalLinks = ({ externalIds, homepage, mediaType }) => {
  const imdbLink =
    mediaType !== "person"
      ? `https://www.imdb.com/title/${externalIds.info.imdb_id}`
      : `https://www.imdb.com/name/${externalIds.info.imdb_id}`;

  return (
    <FlexContainer>
      {externalIds.info.imdb_id && (
        <StyledLink target="_blank" href={imdbLink}>
          <FontAwesomeIcon icon={faImdb} />
          <HiddenTitle>Link a imdb</HiddenTitle>
        </StyledLink>
      )}
      {externalIds.info.facebook_id && (
        <StyledLink
          target="_blank"
          href={`https://www.facebook.com/${externalIds.info.facebook_id}`}
        >
          {" "}
          <FacebookIcon fontSize="large" />
          <HiddenTitle>Link a Facebook</HiddenTitle>
        </StyledLink>
      )}
      {externalIds.info.instagram_id && (
        <StyledLink
          target="_blank"
          href={`https://www.instagram.com/${externalIds.info.instagram_id}`}
        >
          <InstagramIcon fontSize="large" />
          <HiddenTitle>Link a Instagram</HiddenTitle>
        </StyledLink>
      )}
      {externalIds.info.twitter_id && (
        <StyledLink
          target="_blank"
          href={`https://twitter.com/${externalIds.info.twitter_id}`}
        >
          <TwitterIcon fontSize="large" />
          <HiddenTitle>Link a Twitter</HiddenTitle>
        </StyledLink>
      )}
      {homepage && (
        <StyledLink target="_blank" href={homepage}>
          <LinkIcon fontSize="large" />
          <HiddenTitle>Link a la web oficial</HiddenTitle>
        </StyledLink>
      )}
    </FlexContainer>
  );
};

export default ExternalLinks;
