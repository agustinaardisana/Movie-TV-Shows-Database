import { useEffect, useState } from "react";
import styled from "styled-components";
import CardSection from "../components/CardSection";

const HomeContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Home = () => {
  const apiKey = "api_key=c5b12fd694a4290a27c963631e81509e";
  const baseURL = "https://api.themoviedb.org/3//trending/movies/week?";
  const language = "&language=es-ES";

  const [dataMovies, SetDataMovies] = useState([]);

  useEffect(() => {
    fetch(baseURL + apiKey)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        SetDataMovies(data.results);
      });
  }, []);
  console.log(dataMovies);

  return (
    <>
      <HomeContainer>
        {dataMovies && (
          <CardSection
            title="Peliculas que son tendencia"
            dataMovies={dataMovies}
          />
        )}
        <CardSection title="Series que son tendencia" />
      </HomeContainer>
      ;
    </>
  );
};

export default Home;
