import styled from "styled-components";
import { Link } from "react-router-dom";
//
import { notAvailable } from "../utils/variables";
import CardImage from "./CardImage";
import Rating from "./Rating";
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

const StyledLink = styled(Link)`
  margin-right: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.link};

  &:hover {
    color: ${(props) => props.theme.colors.text};
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
  }
`;

const InfoDetailsTV = ({ mediaType, info, externalIds }) => {
  return (
    <>
      <CardImage isInfoView={true} info={info} />
      <Container>
        <Title>{info.name || info.original_name}</Title>

        <Rating rating={info.vote_average} />

        <Text>{info.overview}</Text>

        <Text>Temporadas: {info.number_of_seasons}</Text>

        <Text>Episodios: {info.number_of_episodes}</Text>

        <Text>Duración: {info.episode_run_time} min.</Text>

        <Text>
          Géneros:{" "}
          {info.genres &&
            info.genres.map((genre) => (
              <StyledLink
                to={`/${mediaType}/${genre.name}/${genre.id}/page/1`}
                key={genre.name}
              >
                {genre.name}
              </StyledLink>
            ))}
        </Text>

        <Text>
          Producción:{" "}
          {info.production_companies
            ? info.production_companies
                .map((company) => company.name)
                .join(", ")
            : notAvailable}
        </Text>

        {externalIds && (
          <ExternalLinks externalIds={externalIds} homepage={info.homepage} />
        )}
      </Container>{" "}
    </>
  );
};

export default InfoDetailsTV;
