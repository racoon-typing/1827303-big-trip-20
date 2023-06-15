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

import { RenderPosition, render } from './render';
import NewSortView from './view/new-sort-view';
import NewTripInfoView from './view/new-trip-info';
import BoardPresenter from './presenter/board-presenter';
import PointsModel from './model/point-model';

// Хедер
const siteHeaderElement = document.querySelector('.trip-main');
const siteHeaderSortElement = siteHeaderElement.querySelector('.trip-controls__filters');

// Мейн
const siteMainElement = document.querySelector('.page-main');
const siteMainFilterWrapper = siteMainElement.querySelector('.trip-events');
const pointsModel = new PointsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: siteMainFilterWrapper,
  pointsModel
});

render(new NewTripInfoView, siteHeaderElement, RenderPosition.AFTERBEGIN);
render(new NewSortView(), siteHeaderSortElement);

boardPresenter.init();
