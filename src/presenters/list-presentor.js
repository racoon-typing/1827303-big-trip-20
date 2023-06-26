import Presenter from './presenter.js';

/**
 * @extends {Presenter<ListView, AppModel>}
 */
class ListPresentor extends Presenter {
  /**
   * @override
   * @return {ListViewState}
   */
  createViewState() {
    const points = this.model.getPoints();
    const items = points.map(this.createPointViewState, this);

    console.log(items[0]);
    return {items};
  }

  /**
   * @param {Point} point
   * @return {PointViewState}
   */
  createPointViewState(point, index) {
    const offerGroups = this.model.getOfferGroups();
    const types = offerGroups.map((it) => ({
      value: it.type,
      isSelected: it.type === point.type,
    }));

    return {
      id: point.id,
      types,
      destinations: [],
      startDateTime: point.startDateTime,
      endDateTime: point.endDateTime,
      startDate: '',
      startTime: '',
      endTime: '',
      duration: '',
      basePrice: point.basePrice,
      offers: [],
      isFavorite: point.isFavorite,
      isEditable: index === 0,
    };
  }
}

export default ListPresentor;
