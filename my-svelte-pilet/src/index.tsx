import { PiletApi } from "my-app";
import * as React from "react";
import "./styles/index.scss";
import "./styles/tailwind.css";
import Tile from "./Tile.svelte";
import MyPage from "./MyPage.svelte";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export function setup(app: PiletApi) {
  app.registerPage("/svlete-posts", app.fromSvelte(MyPage));
  app.registerMenu(() => <a href="/svlete-posts">Svelte Posts</a>);
  app.registerTile(app.fromSvelte(Tile), {
    initialColumns: 2,
    initialRows: 2
  });
}

export default app;
