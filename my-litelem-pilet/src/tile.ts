import { LitElement, customElement, html, property,css } from 'lit-element';

export function createTile() {
  const name = 'my-tile';

  @customElement(name)
  class MyTile extends LitElement {
    @property() counter = 0;
    @property({ type: Object }) props: any;

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
        <div class="relative bg-white rounded border hover:border-teal-600 text-center p-2">
          <h3 class="font-bold">LitElement: ${this.counter}</h3>
          <p class="text-sm font-light">
            ${this.props.rows} rows and ${this.props.columns} columns <litel-extension name="smiley"></litel-extension>
          </p>
          <button  class="text-sm p-0 m-0 flex-no-shrink p-2 border-2 rounded text-teal border-teal-500 hover:text-white hover:bg-teal-500" @click="${() => this.counter++}">Increment</button>
          <button  class="text-sm p-0 m-0 flex-no-shrink p-2 border-2 rounded text-teal border-teal-500 hover:text-white hover:bg-teal-500" @click="${() => this.counter--}">Decrement</button>
        </div>
      `;
    }
  }

  console.log(`Created custom element '${name}'.`, MyTile);
  return name;
}
