import Presenter from './presenter.js';

/**
 * @extends {Presenter<OverlayView, AppModel>}
 */
class OverlayPresenter extends Presenter {
  /**
   * @type {Boolean}
   */
  #isModelBusy;

  /**
   * @override
   * @return {OverLayViewState}
   */
  createViewState() {
    return {
      isActive: this.#isModelBusy,
    };
  }

  addEventListeners() {
    this.model.addEventListener('busy', this.handleModelBusy.bind(this));
    this.model.addEventListener('idle', this.handleModelIdle.bind(this));
  }

  handleModelBusy() {
    this.#isModelBusy = true;
    this.updateView();
  }

  handleModelIdle() {
    this.#isModelBusy = false;
    this.updateView();
  }
}

export default OverlayPresenter;
