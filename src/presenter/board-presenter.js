import NewFormEditView from '../views/new-form-edit-view.js';
import NewTripItemView from '../views/new-trip-item-view.js';
import NewTripListView from '../views/new-trip-list-view.js';
import NewFilterView from '../views/new-filter-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  tripListComponent = new NewTripListView();

  constructor({boardContainer, pointsModel}) {
    this.boardContainer = boardContainer;
    this.pointsModel = pointsModel;
  }

  init() {
    this.boardPoints = [...this.pointsModel.getPoints()];
    // console.log(this.boardPoints);

    render(new NewFilterView(), this.boardContainer);
    render(this.tripListComponent, this.boardContainer);
    render(new NewFormEditView(), this.tripListComponent.getElement());

    for (let i = 0; i < this.boardPoints.length; i++) {
      render(new NewTripItemView({item: this.boardPoints[i]}), this.tripListComponent.getElement());
    }
  }

}

