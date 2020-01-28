import { PiletApi } from "my-app";
import "./styles/index.scss";
import "./styles/tailwind.css";
// import Tile from "./Tile.svelte";
import MyPage from "./MyPage.svelte";

export function setup(app: PiletApi) {
  app.registerPage("/svlete-posts", app.fromSvelte(MyPage));
  app.registerMenu(() => app.createLink("/svlete-posts", "Svelte Posts"));
  app.registerTile(
    () => app.createTile(
      "/svlete-posts",
      "My Svelte Pilet",
      "say hello to Svelte from extension api"
    ),
    {
      initialColumns: 2,
      initialRows: 2
    }
  );
}

export default app;
