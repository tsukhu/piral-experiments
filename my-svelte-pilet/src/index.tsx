import { PiletApi } from "my-app";
import "./styles/index.scss";
import './styles/tailwind.css';
import Tile from "./Tile.svelte";



export function setup(app: PiletApi) {
  app.registerTile(app.fromSvelte(Tile), {
    initialColumns: 2,
    initialRows: 2
  });
}

export default app;
