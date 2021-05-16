const apiKey = "?api_key=c5b12fd694a4290a27c963631e81509e";
const baseURL = "https://api.themoviedb.org/3/";
// cambiar media_type para que sea din'amico
const language = "&language=es-ES";

export const defineQueriedList = (pathName, mediaType) => {
  console.log(pathName, mediaType);

  if (pathName.includes("/trending/") || pathName === "/") {
    return `trending/${mediaType}/week`;
  } else {
    return `${mediaType}/${pathName}`;
  }
};

export const createURL = (pathName, mediaType) => {
  const queriedList = defineQueriedList(pathName, mediaType);

  return baseURL + queriedList + apiKey + language;
};
