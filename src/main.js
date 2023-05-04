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
import NewSortView from './view/new-sort-view';
import BoardPresenter from './presenter/board-presenter';
import { render } from './render';

// Хедер
const siteHeaderElement = document.querySelector('.page-header');
const siteHeaderSortElement = siteHeaderElement.querySelector('.trip-controls__filters');

// Мейн
const siteMainElement = document.querySelector('.page-main');
const siteMainFilterWrapper = siteMainElement.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: siteMainFilterWrapper});

render(new NewSortView(), siteHeaderSortElement);
render(new NewFilterView(), siteMainFilterWrapper);

boardPresenter.init();
