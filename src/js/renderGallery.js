import Refs from './refs';
import fetchData from './movie-api-service';
import renderCard from './renderCard';
import addGenresToMovie from './genres';
const { gallery } = Refs;
export default async function renderGallery() {
  const movies = await fetchData('trendingMovie').then(
    ({ data }) => data.results
  );
  addGenresToMovie(movies);
  console.log('movies', movies);
  console.log('gallery', gallery);
  const gallaryMarkup = movies.map(movie => renderCard(movie)).join('');

  gallery.insertAdjacentHTML('beforeend', gallaryMarkup);
}
