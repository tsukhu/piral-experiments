import { PiletApi } from "my-app";
import { MyPage } from "./MyPage";
import { MyPageMenu } from "./MyPageMenu";
import * as React from "react";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export interface TileItemProps {
  link: string;
  name: string;
  description: string;
}

const Tile: React.FC<TileItemProps> = ({ link, name, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-white rounded border">
        <div className="p-4">
          <h3 className="text-lg font-bold">
            <a className="stretched-link" href={link} title={name}>
              {name}
            </a>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export function setup(app: PiletApi) {
  const connect = app.createConnector(() =>
    fetch(apiUrl).then(res => res.json())
  );
  app.showNotification("Hello from Piral!");
  app.registerPage("/my-page", connect(MyPage));
  app.registerMenu(() => (
    <a href="https://docs.piral.io" target="_blank">
      Documentation
    </a>
  ));
  app.registerMenu(MyPageMenu);
  app.registerTile(
    () => (
      <Tile
        name="My First Pilet Tile"
        link="my-page"
        description="Welcome to Pilets"
      />
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
}
