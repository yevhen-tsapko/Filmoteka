import axios from 'axios';

const API_KEY = '288a182a80da5541ecf44f51511bfee2';
BASE_URL = 'https://api.themoviedb.org/3';
export default class MovieApiService {
  API_KEY = '288a182a80da5541ecf44f51511bfee2';
  BASE_URL = 'https://api.themoviedb.org/3';
  constructor() {
    this.page = 1;
  }
  async fetchMovies() {
    return await axios(`${this.BASE_URL}`);
  }
}
