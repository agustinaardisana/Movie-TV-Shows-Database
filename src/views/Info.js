import { FlexCenter, StyledImg } from "../components/Commons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import ExternalLinks from "../components/ExternalLinks";
import { notAvailable } from "../utils/variables";

const FlexSection = styled(FlexCenter)`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.md};
`;

const Img = styled(StyledImg)`
  margin-right: ${(props) => props.theme.spacing.md};
`;

const Container = styled.div`
  max-width: 600px;
  padding: 0 ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.families.title};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const Text = styled.p`
  margin-bottom: ${(props) => props.theme.spacing.sm};
  line-height: 20px;
`;

const StyledLink = styled(Link)`
  margin-right: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.link};

  &:hover {
    color: ${(props) => props.theme.colors.text};
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
  }
`;

const Info = ({ info, mediaType, externalIds }) => {
  console.log(info);
  return (
    <>
      <FlexSection as="section">
        <Img
          src={`https://image.tmdb.org/t/p/w342/${info.poster_path}`}
          alt={info.name}
          width="250px"
        />
        <Container>
          <Title>{info.name || info.title}</Title>
          <Rating rating={info.vote_average} />
          <Text>{info.overview}</Text>
          {mediaType === "tv" && (
            <>
              <Text>Temporadas: {info.number_of_seasons}</Text>
              <Text>Episodios: {info.number_of_episodes}</Text>
            </>
          )}

          <Text>Duración: {info.episode_run_time || info.runtime} min.</Text>
          <Text>
            Géneros:{" "}
            {info.genres &&
              info.genres.map((genre) => (
                <StyledLink
                  to={{
                    pathname: `/${mediaType}/${genre.name}/${genre.id}/page/1`,
                    state: {
                      mediaType: `${mediaType}`,
                      genreName: `${genre.name}`,
                      genreId: `${genre.id}`,
                    },
                  }}
                  key={genre.name}
                >
                  {genre.name}
                </StyledLink>
              ))}
          </Text>
          {mediaType === "movie" && (
            <>
              <Text>
                Presupuesto:{" "}
                {info.budget
                  ? info.budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : notAvailable}
              </Text>
              <Text>
                Recaudación:{" "}
                {info.revenue
                  ? info.revenue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : notAvailable}
              </Text>
            </>
          )}
          <Text>
            Producción:{" "}
            {info.production_companies &&
              info.production_companies
                .map((company) => company.name)
                .join(", ")}
          </Text>
          {externalIds && (
            <ExternalLinks externalIds={externalIds} homepage={info.homepage} />
          )}
        </Container>
      </FlexSection>
    </>
  );
};

export default Info;
