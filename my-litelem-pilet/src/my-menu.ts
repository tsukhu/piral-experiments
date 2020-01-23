import { LitElement, customElement, html } from "lit-element";

export function createMenu() {
  const name = "my-menu";

  @customElement(name)
  class MyMenu extends LitElement {
    render() {
      return html`
        <a href="/lit-page">lit Element</a>
      `;
    }
  }

  console.log(`Created custom element '${name}'.`, MyMenu);
  return name;
}
