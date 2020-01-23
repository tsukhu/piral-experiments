import "piral/polyfills";
import "@webcomponents/webcomponentsjs/webcomponents-loader";
import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter";
import { renderInstance } from "piral";
import { createSvelteApi } from "piral-svelte";
import { createLitElApi } from "piral-litel";
import { layout, errors } from "./layout";

// change to your feed URL here (either using feed.piral.io or your own service)
const feedUrl = 'http://localhost:9000/api/v1/pilet';
// const feedUrl = "https://feed.piral.io/api/v1/pilet/tksukhu";

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
  extendApi: [createLitElApi(),createSvelteApi()]
});
