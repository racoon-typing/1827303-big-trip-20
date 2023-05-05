import NewFormEditView from '../view/new-form-edit-view.js';
import NewTripItemView from '../view/new-trip-item-view.js';
import NewTripListView from '../view/new-trip-list-view.js';
import NewFilterView from '../view/new-filter-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  tripListComponent = new NewTripListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(new NewFilterView(), this.boardContainer);
    render(this.tripListComponent, this.boardContainer);
    render(new NewFormEditView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new NewTripItemView(), this.tripListComponent.getElement());
    }
  }

}

