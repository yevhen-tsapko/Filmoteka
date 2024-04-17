import Refs from './refs';
import fetchData from './movie-api-service';
import renderCard from './renderCard';
import addGenresToMovie from './genres';
import paginationInstance from './pagination';
import renderModal from './renderModal';
const { gallery } = Refs;
// let page = 1;

export default async function renderGallery(path) {
  const page = paginationInstance.getCurrentPage();
  // console.log('page', page);
  const movies = await fetchData(path, page).then(({ data }) => {
    paginationInstance.setTotalItems(data.total_results);
    return data.results;
  });
  addGenresToMovie(movies);
  // console.log('movies', movies);
  const gallaryMarkup = movies.map(movie => renderCard(movie)).join('');
  gallery.insertAdjacentHTML('beforeend', gallaryMarkup);
  gallery.addEventListener('click', renderModal);
}
