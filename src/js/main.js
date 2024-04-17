import '../scss/style.scss';
import renderGallery from './renderGallery';
import paginationInstance from './pagination';
import Refs from './refs';
import handleSearch from './searchMovie';
const { gallery, searchForm } = Refs;

renderGallery();
// paginationInstance.on('beforeMove', event => {
//   page = event.page;
//   console.log('page main=', page);
//   renderGallery('trendingMovie', page);
// });
paginationInstance.on('afterMove', () => {
  renderGallery();
  window.scrollTo({
    top: parseInt(getComputedStyle(gallery).height),
    behavior: 'smooth',
  });
});
searchForm.addEventListener('submit', handleSearch);
