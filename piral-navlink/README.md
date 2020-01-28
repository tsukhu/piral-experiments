# piral-navlink

When dealing with multiple frontend technologies, we will run into the issue of not having access to React components (like NavLink) , that will be required for the layout items like the menu or dashboard. This plugin will abstract out access to these React components and make them available to other non-React pilet apps.

## Documentation

The following functions are brought to the Pilet API.

### `createLinkApi`

## Setup and Bootstrapping

The provided library only brings API extensions for pilets to a Piral instance.

For the setup of the library itself you'll need to import `createLinkApi` from the `piral-navlink` package.

```ts
import { createLinkApi } from "piral-navlink";
```

The integration looks like:

```ts
const instance = createInstance({
  // important part
  extendApi: [createLinkApi()]
  // ...
});
```

### `createLink`

Create a menu link component based on NavLink

```
createLink(to: string, name: string): ComponentType;
```

### Usage

```
piral.registerMenu(() => app.createLink("/svlete-app", "Svelte App"));
```

### `createTile`

Create tile component (TailwindCSS)

```
createTile(link: string, title: string, description: string): ComponentType;
```

### Usage

```
piral.registerTile(
    () => piral.createTile(
      "/svlete-app",
      "My Svelte Pilet",
      "say hello to Svelte from extension api"
    ),
    {
      initialColumns: 2,
      initialRows: 2
    }
  );
```

## License

MIT
