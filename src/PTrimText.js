import { html, LitElement } from 'lit';

export class PTrimText extends LitElement {
  static properties = {
    replacer: {
      type: String,
    },
    lettersToTrim: {
      attribute: 'letters-to-trim',
      type: Number,
    },
  };

  constructor() {
    super();
    this.text = '';
    this.replacer = '...';
    this.lettersToTrim = 10;
  }

  getTrimmedText() {
    const trimmedText = this.text.slice(0, this.lettersToTrim);
    return `${trimmedText}${this.replacer}`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.text = this.textContent.trim();
    this.innerHTML = '';
  }

  render() {
    return html`
      ${this.getTrimmedText()}
      <slot></slot>
    `;
  }
}

// function trimText(text, lettersAmount, replacer) {
//   const trimmedText = text.trim().slice(0, lettersAmount);
//   this.textContent = `${trimmedText}${replacer}`;
// }
