const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.TMDB__API__KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.TMDB__API__KEY}&with_networks=213`,
  fetchTopRated:
    "/movie/top_rated?api_key=2bd100e4b555afbe68970b0f50bd5285&language=en-US",
  fetchActionMovies:
    "/discover/movie?api_key=2bd100e4b555afbe68970b0f50bd5285&with_genres=28",
  fetchComedyMovies:
    "/discover/movie?api_key=2bd100e4b555afbe68970b0f50bd5285&with_genres=35",
  fetchHorrorMovies:
    "/discover/movie?api_key=2bd100e4b555afbe68970b0f50bd5285&with_genres=27",
  fetchRomanticMovies:
    "/discover/movie?api_key=2bd100e4b555afbe68970b0f50bd5285&with_genres=10749",
  fetchDocumentaries:
    "/discover/movie?api_key=2bd100e4b555afbe68970b0f50bd5285&with_genres=99",
};
export default requests;
