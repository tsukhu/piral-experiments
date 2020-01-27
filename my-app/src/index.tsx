import "piral/polyfills";
/* import "@webcomponents/webcomponentsjs/webcomponents-loader";
import "@webcomponents/webcomponentsjs/webcomponents-bundle.js";
import "@webcomponents/webcomponentsjs/custom-elements-es5-adapter"; */
import { renderInstance } from "piral";
import { createSvelteApi } from "piral-svelte";
// import { createLitElApi } from "piral-litel";
import { layout, errors } from "./layout";

const activeEnv = process.env.STAGE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});


const feedServiceUrl = process.env.FEED_SERVICE_URL || 'http://localhost:9000/api/v1/pilet';

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedServiceUrl)
      .then(res => res.json())
      .then(res => res.items)
      .catch(() => {
        return [];
      });
  },
  extendApi: [createSvelteApi()]
});
