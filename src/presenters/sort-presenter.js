import Presenter from './presenter.js';

/**
 * @extends {Presenter<SortView>}
 */
class SortPresenter extends Presenter {
  /**
   * @override
   * @return {SortViewState}
   */
  createViewState() {
    /**
     * @type {Array<SortType>}
     */
    const types = ['day', 'event', 'time', 'price', 'offers'];

    const items = types.map((it) => ({
      value: it,
      isSelected: it === 'time',
      isDisabled: it === 'event' || it === 'offers',
    }));

    return { items };
  }

  /**
   * @override
   */
  addEventListeners() {
    const handleSortList = (event) => {
      if (event.target.tagName !== 'LABEL') {
        return;
      }


    };

    this.view.addEventListener('change', handleSortList);
  }
}

export default SortPresenter;
