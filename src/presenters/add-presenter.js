import Presenter from './presenter.js';

/**
 * @extends {Presenter<AddView>}
 */
class AddPresenter extends Presenter {
  /**
   * @override
   * @returns {AddViewState}
   */
  createViewState() {
    return {
      isDisabled: true,
    };
  }
}

export default AddPresenter;
