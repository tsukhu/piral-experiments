import { LitElement, customElement, html, property } from "lit-element";

export function createMainPage() {
  const name = "my-page";

  @customElement(name)
  class MainPage extends LitElement {
    @property() counter = 0;
    @property({ type: Object }) props: any;

    firstUpdated() {
      const style = this.shadowRoot.ownerDocument.createElement("style");
      style.appendChild(
        document.createTextNode(
          Array.prototype.map
            .call(
              document.querySelectorAll("link[rel=stylesheet]"),
              sheet => `@import url(${JSON.stringify(sheet.href)});`
            )
            .join("\n")
        )
      );
      this.shadowRoot.prepend(style);
    }

    render() {
      return html`
        <div class="container w-screen m-2 p-2 justify-center">
          <h1
            class="text-center text-4xl text-black font-medium leading-snug
    tracking-wider"
          >
            Lit Element App
          </h1>
          <p class="text-center text-lg text-gray-700 mt-2 px-6">
            Say Hi to Lit Elements in Piral !
          </p>
          <div
            class="h-1 mx-auto bg-indigo-200 w-2/3 opacity-75 mt-4 rounded"
          />

          <div class="h-100 w-full flex items-center justify-center font-sans">
            <div class="align-center m-2 p-2 align-center">
              <div
                class="bg-white rounded border hover:border-teal-600 text-center p-2"
              >
                <h3 class="font-bold">LitElement: ${this.counter}</h3>
                <p class="text-sm font-light">
                  ${this.props.rows} rows and ${this.props.columns} columns
                  <litel-extension name="smiley"></litel-extension>
                </p>
                <button
                  class="text-sm p-0 m-0 flex-no-shrink p-2 border-2 rounded text-teal border-teal-500 hover:text-white hover:bg-teal-500"
                  @click="${() => this.counter++}"
                >
                  Increment
                </button>
                <button
                  class="text-sm p-0 m-0 flex-no-shrink p-2 border-2 rounded text-teal border-teal-500 hover:text-white hover:bg-teal-500"
                  @click="${() => this.counter--}"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }

  console.log(`Created custom element '${name}'.`, MainPage);
  return name;
}
