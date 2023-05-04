import { createElement } from '../render';

function createNewTripListtemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class NewTripListView {
  getTemplate() {
    return createNewTripListtemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
