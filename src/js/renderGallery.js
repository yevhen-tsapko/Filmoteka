import Refs from './refs';
import fetchData from './movie-api-service';
import renderCard from './renderCard';
import addGenresToMovie from './genres';
import paginationInstance from './pagination';
import renderModal from './renderModal';
const { gallery } = Refs();
let currentPath = 'trendingMovie';
let currentQuery = '';

export default async function renderGallery(path, query = '') {
  const page = paginationInstance.getCurrentPage();
  // console.log('page', page);
  if (path) {
    currentPath = path;
  }
  if (query) {
    currentQuery = query;
  }
  const movies = await fetchData(currentPath, page, currentQuery).then(
    ({ data }) => {
      paginationInstance.setTotalItems(data.total_results);
      return data.results;
    }
  );
  addGenresToMovie(movies);
  // console.log('movies', movies);
  const gallaryMarkup = movies.map(movie => renderCard(movie)).join('');
  gallery.insertAdjacentHTML('beforeend', gallaryMarkup);
  gallery.addEventListener('click', renderModal);
}
