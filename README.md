# \<p-trim-text>
Component that allows to trim text with replacer. And show full text with native description (title and aria-label) on hover

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@pyncho-wc/p-trim-text)
[![npm (scoped)](https://img.shields.io/npm/v/%40pyncho-wc/p-trim-text?logo=npm&color=green)](https://www.npmjs.com/package/@pyncho-wc/p-trim-text)
![NPM](https://img.shields.io/npm/l/%40pyncho-wc%2Fp-trim-text?color=blue)
![npm package minimized gzipped size (select exports)](https://img.shields.io/bundlejs/size/%40pyncho-wc%2Fp-trim-text)
[![skypack cdn download link](https://img.shields.io/badge/download%20link-cdn?logo=skypack&label=skypack.dev&link=https%3A%2F%2Fcdn.skypack.dev%2F%40pyncho-wc%2Fp-trim-text)](https://cdn.skypack.dev/@pyncho-wc/p-trim-text)

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

<!--
```
<custom-element-demo>
  <template>
    <script src="./p-trim-text.js"></script>
    <link rel="import" href="./demo/index.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<p-trim-text></p-trim-text>
```

## Installation
### CDN
#### Inside script:
```js
import 'https://cdn.skypack.dev/@pyncho-wc/p-trim-text';
```
#### Or in html:

```html
<script
  type="module"
  src="https://cdn.skypack.dev/@pyncho-wc/p-trim-text">
</script>
```

#### With builders like webpack, vite etc:
```bash
npm i @pyncho-wc/p-trim-text
```

#### If you need to change tag name:
```js
import PTrimText from '@pyncho-wc/p-trim-text/index.js';
customElements.define('custom-trim-text', PTrimText);
```

---

## Usage

```html
<p-trim-text
  letters-to-trim="5"
  replacer='---'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p-trim-text>

<!-- RESULT: -->
<!-- Lorem--- -->
```
---

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

---

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

---

## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

---

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
