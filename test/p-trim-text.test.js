import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../p-trim-text.js';

const testingText = `
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nesciunt dignissimos architecto temporibus reprehenderit quibusdam quasi consectetur perferendis neque ab. Officiis error aut nulla laudantium magni fugiat aspernatur quos nisi quis perspiciatis sint, necessitatibus culpa eligendi, possimus in ducimus sequi minima repudiandae non repellendus enim. Delectus numquam libero fugiat blanditiis?
`;

describe('PTrimText', () => {
  it('default letters-to-trim and replacer works', async () => {
    const el = await fixture(html`<p-trim-text>${testingText}</p-trim-text>`);

    expect(el.shadowRoot.textContent.trim()).to.equal('Lorem ipsu...');
  });

  it('custom letters-to-trim and replacer works', async () => {
    const el = await fixture(html`<p-trim-text letters-to-trim='5' replacer='---'>${testingText}</p-trim-text>`);

    expect(el.shadowRoot.textContent.trim()).to.equal('Lorem---');
  });

  it('custom letters-to-trim and replacer works', async () => {
    const el = await fixture(html`<p-trim-text letters-to-trim='5' replacer='---'>${testingText}</p-trim-text>`);

    expect(el.shadowRoot.textContent.trim()).to.equal('Lorem---');
  });
});
