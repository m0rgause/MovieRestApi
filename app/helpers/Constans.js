module.exports = {
  baseUrl: "https://melongmovie.com/",
  seriesUrl: "series/",
  popularUrl: "popular/",
  drakorUrl: "drama-korea/",
  moviesUrl: "latest-movies/",
  urlApi:
    process.env.MODE == "DEVELOPMENT"
      ? `${process.env.URL_API_DEV}:${process.env.PORT}/`
      : process.env.URL_API_PROD,
};