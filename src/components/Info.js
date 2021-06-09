import styled from "styled-components";
//
import { Flex } from "./Commons";
import InfoDetailsMovie from "./InfoDetailsMovie";
import InfoDetailsTV from "./InfoDetailsTV";
import InfoDetailsCast from "./InfoDetailsCast";

const FlexSection = styled(Flex)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.md};

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Info = ({ info, mediaType, externalIds }) => {
  return (
    <>
      <FlexSection as="section">
        {info && (
          <>
            {mediaType === "movie" && (
              <InfoDetailsMovie
                mediaType={mediaType}
                info={info}
                externalIds={externalIds}
              />
            )}
            {mediaType === "tv" && (
              <InfoDetailsTV
                mediaType={mediaType}
                info={info}
                externalIds={externalIds}
              />
            )}
            {mediaType === "person" && (
              <InfoDetailsCast
                mediaType={mediaType}
                info={info}
                externalIds={externalIds}
              />
            )}
          </>
        )}
      </FlexSection>
    </>
  );
};

export default Info;
