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
import NewSortView from './view/new-sort-view';
import BoardPresenter from './presenter/board-presenter';
import NewTripInfoView from './view/new-trip-info';
import { RenderPosition, render } from './render';

// Хедер
const siteHeaderElement = document.querySelector('.trip-main');
const siteHeaderSortElement = siteHeaderElement.querySelector('.trip-controls__filters');

// Мейн
const siteMainElement = document.querySelector('.page-main');
const siteMainFilterWrapper = siteMainElement.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: siteMainFilterWrapper});

render(new NewTripInfoView, siteHeaderElement, RenderPosition.AFTERBEGIN);
render(new NewSortView(), siteHeaderSortElement);

boardPresenter.init();
