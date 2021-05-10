import { useEffect, useState } from "react";
import styled from "styled-components";
import CardSection from "../components/CardSection";

const HomeContainer = styled.main`
  padding: ${(props) => props.theme.spacing.md};
  width: ${(props) => props.theme.width.full};
`;

const Home = () => {
  const apiKey = "api_key=c5b12fd694a4290a27c963631e81509e";
  const baseURL = "https://api.themoviedb.org";
  const trendingMovies = "/3//trending/movies/week?";
  const trendingTV = "/3//trending/tv/week?";
  const language = "&language=es-ES";

  // mediaType = "";

  const [dataMovies, SetDataMovies] = useState([]);
  const [dataTV, SetDataTV] = useState([]);

  useEffect(() => {
    fetch(baseURL + trendingMovies + apiKey + language)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        SetDataMovies(data.results);
      });
  }, []);
  console.log(dataMovies);

  useEffect(() => {
    fetch(baseURL + trendingTV + apiKey + language)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        SetDataTV(data.results);
      });
  }, []);
  console.log(dataTV);

  return (
    <>
      <HomeContainer>
        {/* {dataMovies && ( */}
        <CardSection
          title="Peliculas que son tendencia"
          dataMovies={dataMovies}
        />
        {/* )} */}
        <CardSection title="Series que son tendencia" dataTV={dataTV} />
      </HomeContainer>
      ;
    </>
  );
};

export default Home;
