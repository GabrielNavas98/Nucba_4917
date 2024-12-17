const KEY = "8185edf8e7b68f5c39978b19149fde12";

export const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
export const TOPRATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
export const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

export const fetchMovies = async (searcTerm, page = 1) => {
  const resp = await fetch(searcTerm + `&page=${page}`);
  const data = await resp.json();
  return data;
};
