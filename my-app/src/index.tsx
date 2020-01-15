import 'piral/polyfills';
import { renderInstance } from 'piral';
import { layout, errors } from './layout';

// change to your feed URL here (either using feed.piral.io or your own service)
const feedUrl = 'http://localhost:9000/api/v1/pilet';

renderInstance({
  layout,
  errors,
  requestPilets() {
    return fetch(feedUrl)
      .then(res => res.json())
      .then(res => res.items);
  },
});
