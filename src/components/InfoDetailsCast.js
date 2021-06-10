import styled from "styled-components";
//
import { notAvailable } from "../utils/variables";
import CardImage from "./CardImage";
import ExternalLinks from "./ExternalLinks";

const Container = styled.div`
  max-width: 600px;
  padding: 0 ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 750px) {
    margin-top: ${(props) => props.theme.spacing.md};
  }
  @media (max-width: 350px) {
    max-width: 250px;
  }
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.families.title};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: ${(props) => props.theme.fonts.sizes.p};
`;

const InfoDetailsCast = ({ mediaType, info, externalIds }) => {
  return (
    <>
      <CardImage isInfoView={true} isPerson={true} info={info} />

      <Container>
        <Title>{info.name}</Title>

        <Text>{info.biography || notAvailable}</Text>

        {externalIds && (
          <ExternalLinks
            externalIds={externalIds}
            homepage={info.homepage}
            mediaType={mediaType}
          />
        )}
      </Container>
    </>
  );
};

export default InfoDetailsCast;
