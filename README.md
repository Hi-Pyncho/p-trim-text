# \<p-trim-text>

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element)

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
```js
import 'https://cdn.skypack.dev/@pyncho-wc/p-trim-text';
```
or
```html
<script
  type="module"
  src="https://cdn.skypack.dev/@pyncho-wc/p-trim-text">
</script>
```

With builders like webpack, vite etc
```bash
npm i @pyncho-wc/p-trim-text
```

## Usage

```html
<p-trim-text
  letters-to-trim="5"
  replacer='---'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p-trim-text>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to minimize the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
