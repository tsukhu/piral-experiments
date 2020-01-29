import { PiletApi } from "my-app";
import "./styles/index.scss";
import "./styles/tailwind.css";
import { createMainPage } from "./main-page";


/**
 * Shows an API extension using LitElement components.
 */
export function setup(piral: PiletApi) {
  const mypage = createMainPage();
  piral.registerPage("/lit-page", piral.fromLitEl(mypage));
  piral.registerMenu(() => piral.createLink("/lit-page", "WebComponent Page"));
  piral.registerTile(
    () => piral.createTile(
      "/lit-page",
      "My LitElem Pilet",
      "say hello to LitElem from extension api"
    ),
    {
      initialColumns: 2,
      initialRows: 2
    }
  );
}
