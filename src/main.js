// /**
//  * Складывает a и b
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  */
// function sum(a, b) {
//   return a + b;
// }

// console.log(
//   sum(2, 1)
// );
import NewFilterView from './view/new-filter-view';
import { render } from './render';
import NewSortView from './view/new-sort-view';

const siteHeaderElement = document.querySelector('.page-header');
const siteHeaderSortElement = siteHeaderElement.querySelector('.trip-controls__filters');

const siteMainElement = document.querySelector('.page-main');
const siteMainFilterWrapper = siteMainElement.querySelector('.trip-events');

render(new NewSortView(), siteHeaderSortElement);
render(new NewFilterView(), siteMainFilterWrapper);
