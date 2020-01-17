// import App from './App.svelte';
import { PiletApi } from "my-app";
import Tile from "./Tile.svelte";

/* const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
}); */

export function setup(app: PiletApi) {
  app.showNotification("Hello from Svelte!");
  app.registerTile(app.fromSvelte(Tile), {
    initialColumns: 2,
    initialRows: 2
  });
}

export default app;
