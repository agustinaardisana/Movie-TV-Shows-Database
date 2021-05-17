const apiKey = "?api_key=c5b12fd694a4290a27c963631e81509e";
const baseURL = "https://api.themoviedb.org/3/";
const language = "&language=es-ES";

export const defineQueriedList = (pathName, mediaType) => {
  if (pathName.includes("/trending/") || pathName === "/") {
    return `trending/${mediaType}/week`;
  } else if (pathName.includes("popular")) {
    return `${mediaType}/popular`;
  } else {
    return `${mediaType}/${pathName}`;
  }
};

export const createURL = (pathName, mediaType) => {
  const queriedList = defineQueriedList(pathName, mediaType);

  return baseURL + queriedList + apiKey + language;
};

const titles = {
  tv: {
    popular: "Series Populares",
    top_rated: "Series Con Mejores Críticas",
    on_the_air: "Series Al Aire",
    trending: "Series Que Son Tendencia",
  },

  movie: {
    popular: "Películas Populares",
    top_rated: "Películas Con Mejores Críticas",
    upcoming: "Películas A estrenarse",
    now_playing: "Películas En Cine",
    trending: "Películas Que Son Tendencia",
  },
};

export const generateTitle = (mediaType, category) => {
  for (let titlesMedia in titles) {
    if (titlesMedia === mediaType) {
      for (let titlesCategory in titles[titlesMedia]) {
        if (titlesCategory === category) {
          return titles[titlesMedia][titlesCategory];
        }
      }
    }
  }
};
