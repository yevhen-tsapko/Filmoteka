import axios from 'axios';

const API_KEY = '288a182a80da5541ecf44f51511bfee2';
const BASE_URL = 'https://api.themoviedb.org/3';

export default async function fetchData(additionalUrl, page, query) {
  const pathes = {
    moviesGenres: `/genre/movie/list?`,
    trendingMovie: `/trending/movie/day?page=${page}&`,
    moviesSearch: `/search/movie?page=${page}&query=${query}&`,
    popularMovie: `/movie/popular?page=${page}&`,
  };
  return await axios(`${BASE_URL}${pathes[additionalUrl]}api_key=${API_KEY}`);
}
