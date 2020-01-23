import { LitElement, customElement, html } from "lit-element";

export function createMenu() {
  const name = "my-menu";

  @customElement(name)
  class MyMenu extends LitElement {

    firstUpdated() {
      const style = this.shadowRoot.ownerDocument.createElement('style');
      style.appendChild(
        document.createTextNode(
          Array.prototype.map
            .call(
              document.querySelectorAll('link[rel=stylesheet]'),
              sheet => `@import url(${JSON.stringify(sheet.href)});`,
            )
            .join('\n'),
        ),
      );
      this.shadowRoot.prepend(style);
    }


    render() {
      return html`
        <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4" href="/lit-page"><span>Lit Element</span></a>
      `;
    }
  }

  console.log(`Created custom element '${name}'.`, MyMenu);
  return name;
}
