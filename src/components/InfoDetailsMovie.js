import styled from "styled-components";
import { Link } from "react-router-dom";
//
import { notAvailable, convertToUsd } from "../utils/variables";
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

const InfoDetailsMovie = ({ mediaType, info, externalIds }) => {
  return (
    <>
      <CardImage isInfoView={true} info={info} />
      <Container>
        <Title>{info.title || info.original_title}</Title>

        <Rating rating={info.vote_average} />

        <Text>{info.overview}</Text>

        <Text>Duración: {info.runtime} min.</Text>

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
          Presupuesto: {info.budget ? convertToUsd(info.budget) : notAvailable}
        </Text>

        <Text>
          Recaudación:{" "}
          {info.revenue ? convertToUsd(info.revenue) : notAvailable}
        </Text>

        <Text>
          Producción:{" "}
          {info.production_companies &&
            info.production_companies.map((company) => company.name).join(", ")}
        </Text>

        {externalIds && (
          <ExternalLinks externalIds={externalIds} homepage={info.homepage} />
        )}
      </Container>
    </>
  );
};

export default InfoDetailsMovie;
