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
    this.setAttribute('title', this.text);
    this.setAttribute('aria-label', this.text);
    this.innerHTML = '';
  }

  render() {
    return html`
      ${this.getTrimmedText()}
    `;
  }
}
