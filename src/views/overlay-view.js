import View from './view.js';
import './overlay-view.css';

/**
 * @extends {View<OverLayViewState>}
 * @implements {EventListenerObject}
 */
class OverlayView extends View {
  constructor() {
    super();

    this.classList.add('overlay');
  }

  /**
   * @override
   */
  render() {
    const overlay = this.state;

    if (overlay.isActive) {
      this.classList.add('overlay--active');
      document.addEventListener('keydown', this);
    } else {
      this.classList.remove('overlay--active');
      document.removeEventListener('keydown', this);
    }
  }

  /**
   * @param {KeyboardEvent} evt
   */
  handleEvent(evt) {
    evt.preventDefault();
  }
}

customElements.define('overlay-view', OverlayView);

export default OverlayView;
