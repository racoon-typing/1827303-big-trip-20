import Presenter from './presenter.js';

/**
 * @extends {Presenter<FilterView>}
 */
class FilterPresentor extends Presenter {
  /**
   * @override
   * @returns {FilterViewState}
   */
  createViewState() {
    /**
     * @type {Array<FilterType>}
     */
    const types = ['everything', 'future', 'past', 'present'];

    const items = types.map((it) => ({
      value: it,
      isSelected: it === 'future',
      isDisabled: it === 'past',
    }));

    return {items};
  }
}

export default FilterPresentor;
