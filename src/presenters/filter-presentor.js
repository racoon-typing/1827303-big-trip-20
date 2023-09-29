import Presenter from './presenter.js';

/**
 * @extends {Presenter<FilterView, AppModel>}
 */
class FilterPresentor extends Presenter {
  /**
   * @override
   * @returns {FilterViewState}
   */
  createViewState() {
    /**
     * @type {UrlParams}
     */
    const { filter = 'everything' } = this.getUrlParams();

    /**
     * @type {Array<FilterType>}
     */
    const types = ['everything', 'future', 'present', 'past'];

    const items = types.map((it) => ({
      value: it,
      isSelected: it === filter,
      isDisabled: this.model.getPoints({filter: it}).length === 0,
    }));

    return {items};
  }

  /**
   * @override
   */
  addEventListeners() {
    this.view.addEventListener('change', this.handleViewChange.bind(this));
  }

  /**
    * @param {Event & {target: {value: FilterType}}} event
    */
  handleViewChange(event) {
    /**
     * @type {UrlParams}
     */
    const urlParams = {
      filter: event.target.value,
    };

    this.setUrlParams(urlParams);
  }
}

export default FilterPresentor;
