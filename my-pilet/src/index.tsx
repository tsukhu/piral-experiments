import { PiletApi } from "my-app";
//import { renderInDom } from 'piral-core';
import MyPage from "./MyPage";
import IFrame from "./IFrame";
import { MyPageMenu } from "./MyPageMenu";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/tailwind.css";
import "./styles/index.scss";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export interface TileItemProps {
  link: string;
  name: string;
  description: string;
}

const Tile: React.FC<TileItemProps> = ({ link, name, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-white rounded border hover:border-teal-600">
        <div className="p-4">
          <h3 className="text-lg font-bold hover:text-red-700">
            <Link to={link}>{name}</Link>
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export interface NavLinkProps {
  to: string;
  label: string;
}


export function setup(app: PiletApi) {
  const connect = app.createConnector(() =>
    fetch(apiUrl).then(res => res.json())
  );

  app.registerExtension<NavLinkProps>('navlink', ({ params: { to, label } }) => (
    <NavLink to={to}>{label}</NavLink>
  ));
  // app.showNotification("Hello from Piral!");
  app.registerPage("/posts", 
    connect(MyPage)
  );
  app.registerPage("/docs", () => (
    <IFrame id="piral docs" url="https://docs.piral.io" title="Docs" />
  ));
  app.registerPage("/meetup", () => (
    <IFrame
      id="piral meetup"
      url="https://meetup-tsukhu.netlify.com/"
      title="Meetup"
    />
  ));
  app.registerMenu(() => <app.Extension name="navlink" params={{to: "/docs", label:"Piral Docs"}}/>);
  app.registerMenu(() => <NavLink to="/meetup">Meetup</NavLink>);
  
  app.registerPage("/typescript-site", () => (
    <IFrame id="typescript" url="https://www.typescriptlang.org/" title="Typescript" />
  ));
  app.registerPage("/react-site", () => (
    <IFrame id="typescript" url="https://reactjs.org/" title="ReactJS" />
  ));
  app.registerPage("/tailwind-site", () => (
    <IFrame id="tailwind" url="https://tailwindcss.com/" title="TailwindCSS" />
  ));
  app.registerMenu(MyPageMenu);
  app.registerTile(
    () => <Tile name="Meetup" link="meetup" description="Organize Meetups!" />,
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
  app.registerTile(
    () => (
      <Tile
        name="TypeScript"
        link="typescript-site"
        description="for next generation portals"
      />
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
  app.registerTile(
    () => (
      <Tile
        name="React"
        link="react-site"
        description="for building components"
      />
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
  app.registerTile(
    () => (
      <Tile
        name="TailwindCSS"
        link="tailwind-site"
        description="for layout and styling"
      />
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );

  app.registerTile(
    () => (
      <Tile
        name="Piral Documentation"
        link="docs"
        description="Read more about this amazing framework!"
      />
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
  app.registerTile(
    () => (
      <Tile
        name="My Posts"
        link="posts"
        description="React based Posts Micro App"
      />
    ),
    {
      initialColumns: 2,
      initialRows: 1
    }
  );
}
