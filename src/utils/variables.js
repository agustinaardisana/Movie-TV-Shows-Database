const apiKey = "?api_key=c5b12fd694a4290a27c963631e81509e";
const baseURL = "https://api.themoviedb.org/3/";
const language = "&language=es-ES";

export const defineQueriedList = (pathName, mediaType, details) => {
  if (!pathName) {
    return `discover/${mediaType}`;
  } else if (details) {
    return `${mediaType}/${pathName}/${details}`;
  } else if (pathName.includes("trending") || pathName === "/") {
    return `trending/${mediaType}/week`;
  } else {
    return `${mediaType}/${pathName}`;
  }
};

export const createURL = (pathName, mediaType, details, optionalQuery) => {
  const queriedList = defineQueriedList(pathName, mediaType, details);
  const optionalQueryPath = optionalQuery || "";

  return baseURL + queriedList + apiKey + language + optionalQueryPath;
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
  return titles[mediaType][category];
};

export const showPreview = (pathName) => {
  const previewPaths = ["/", "/movie", "/tv"];
  return previewPaths.some((element) => element === pathName);
};

export const notAvailable = "Información no disponible";

export const convertToUsd = (amount) => {
  const number = amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return number;
};
