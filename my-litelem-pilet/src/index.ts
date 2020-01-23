import { PiletApi } from "my-app";
import "./styles/index.scss";
import "./styles/tailwind.css";
import { createTile } from "./tile";
import { createMainPage } from "./main-page";
import { createMenu } from "./my-menu";

/**
 * Shows an API extension using LitElement components.
 */
export function setup(piral: PiletApi) {
  const tile = createTile();
  const mypage = createMainPage();
  const mymenu = createMenu();
  piral.registerMenu(piral.fromLitEl(mymenu));
  piral.registerPage("/lit-page", piral.fromLitEl(mypage));
  piral.registerTile(piral.fromLitEl(tile), {
    initialColumns: 2,
    initialRows: 2
  });
}
