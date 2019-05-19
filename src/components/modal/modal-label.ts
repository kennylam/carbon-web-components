import { html, LitElement, customElement } from 'lit-element';
import settings from 'carbon-components/es/globals/js/settings';
import styles from './modal.scss';

const { prefix } = settings;

/**
 * Modal label.
 */
@customElement(`${prefix}-modal-label` as any)
class BXModalLabel extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default BXModalLabel;
