import Pagination from 'tui-pagination';
import Refs from './refs';

const { paginationContainer } = Refs;
const paginationInstance = new Pagination(paginationContainer, {
  totalItems: 500,
  itemsPerPage: 20,
  visiblePages: 5,
});
// console.log('instance.getCurrentPage()', paginationInstance.getCurrentPage());
export default paginationInstance;
