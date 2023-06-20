import Model from './model.js';
import points from '../data/points.json';
import destination from '../data/destinations.json';
import offerGroups from '../data/offers.json';

class AppModel extends Model {
  #points;
  #destination;
  #offerGroups;

  constructor() {
    super();

    this.#points = points;
    this.#destination = destination;
    this.#offerGroups = offerGroups;
  }

  /**
   * @return {Array<Point>}
   */
  getPoints() {
    return this.#points;
  }
}

export default AppModel;
