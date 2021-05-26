import LinkIcon from "@material-ui/icons/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";

import { Flex } from "./Commons";
import styled from "styled-components";

const FlexContainer = styled(Flex)`
  padding-top: ${(props) => props.theme.spacing.sm};
`;

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  margin-right: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.fonts.sizes.h1};
`;

const ExternalLinks = ({ externalIds, homepage }) => {
  const { imdb_id, facebook_id, twitter_id, instagram_id } = externalIds;

  //   const externalURLs = {
  //     imdb_id: "https://www.imdb.com/title/",
  //     facebook_id: "https://www.facebook.com/",
  //     twitter_id: "https://twitter.com/",
  //     instagram_id: "https://www.instagram.com/",
  //   };

  //   const createExternalURL = (key, value) => {
  //     return externalURLs[key] + value;
  //   };

  return (
    <FlexContainer>
      {imdb_id && (
        <StyledLink
          target="_blank"
          href={`https://www.imdb.com/title/${imdb_id}`}
        >
          {/* <LinkIcon fontSize="large" /> */}
          <FontAwesomeIcon icon={faImdb} />
        </StyledLink>
      )}
      {facebook_id && (
        <StyledLink
          target="_blank"
          href={`https://www.facebook.com/${facebook_id}`}
        >
          {" "}
          <FacebookIcon fontSize="large" />
        </StyledLink>
      )}
      {instagram_id && (
        <StyledLink
          target="_blank"
          href={`https://www.instagram.com/${instagram_id}`}
        >
          <InstagramIcon fontSize="large" />
        </StyledLink>
      )}
      {twitter_id && (
        <StyledLink target="_blank" href={`https://twitter.com/${twitter_id}`}>
          <TwitterIcon fontSize="large" />
        </StyledLink>
      )}
      {homepage && (
        <StyledLink target="_blank" href={homepage}>
          <LinkIcon fontSize="large" />
        </StyledLink>
      )}
    </FlexContainer>
  );
};

export default ExternalLinks;
