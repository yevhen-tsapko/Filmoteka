import fetchData from './movie-api-service';
import renderGallery from './renderGallery';
import Refs from './refs';
import paginationInstance from './pagination';
const { gallery } = Refs;
export default function handleSearch(evt) {
  evt.preventDefault();
  gallery.innerHTML = '';
  const inputValue = evt.target.elements.search.value.trim();
  paginationInstance.reset();
  renderGallery('moviesSearch', inputValue);
}
