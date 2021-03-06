import * as React from "react";
import {
  ComponentsState,
  ErrorComponentsState,
  Menu,
  Notifications,
  SwitchErrorInfo,
  MenuItemProps
  // ,useGlobalState
} from "piral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const MenuItem: React.FC<MenuItemProps> = ({ children }) => (
  <div
    id="menu-item"
    className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4 first:a:active:bg-red-300"
    style={{ width: "fit-content" }}
  >
    {children}
  </div>
);

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
          <h3 className="md:text-lg font-bold hover:text-red-700">
            {!link.startsWith("http") && <NavLink to={link}>{name}</NavLink>}
            {link.startsWith("http") && (
              <a href={link} title={name} target="_blank">
                {name}
              </a>
            )}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const defaultTiles = () => {
  const tileList = [
    {
      link: "https://micro-frontends.org/",
      name: "Microfrontends",
      description: "extending the microservice idea to frontend development"
    } /* ,
    {
      link: "/lit-page",
      name: "My LitElem Pilet",
      description: "Say hello to LitElem"
    } */
  ];

  return (
    <>
      {tileList.map(tile => (
        <Tile {...tile} key={tile.name} />
      ))}
    </>
  );
};

const defaultMenuItems = (
  <>
    {/*    <MenuItem type="general">
      <NavLink
        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        to="/svlete-posts"
      >
        Svelte Hobbies
      </NavLink>
    </MenuItem>
     <MenuItem type="general">
      <NavLink
        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        to="/lit-page"
      >
        LitElem Counter
      </NavLink>
    </MenuItem> */}
    <MenuItem type="general">
      <NavLink
        className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4"
        to="/not-found"
      >
        Not Found
      </NavLink>
    </MenuItem>
  </>
);

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className="antialiased italic">
        Could not find the requested page. Are you sure it exists?
      </p>
      <p className="antialiased">
        Go back{" "}
        <NavLink to="/" className="text-teal-400 hover:font-bold text-teal-600">
          to the dashboard
        </NavLink>
        .
      </p>
    </div>
  )
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: props => (
    <div className="text-center m-2 p-2">
      <h1 className="antialiased font-bold text-red-600 text-lg">Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => {
    document.title = "Main App";
    return (
      <div className="container max-w-full mx-auto mt-2 ">
        <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
          Piral microfrontend experiments
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6">
          Welcome to your new microfrontend app shell, built with Piral
        </p>
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div className="flex flex-row flex-wrap align-center mx-32 mt-4">
          {defaultTiles()}
          {children}
        </div>
      </div>
    );
  },
  DashboardTile: ({ columns, rows, children }) => <>{children}</>,
  Layout: ({ children }) => (
    <div>
      <Notifications />
      <Menu type="general" />
      {children}
    </div>
  ),
  LoadingIndicator: () => (
    <div className="flex items-center justify-center flex-grow h-screen">
      <FontAwesomeIcon icon={faSpinner} spin size="6x" />
    </div>
  ),
  MenuContainer: ({ children }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    return (
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-no-shrink hover:text-white mr-6">
            <svg
              className="h-8 w-8 mr-2 fill-current"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              <NavLink to="/">Piral</NavLink>
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              className="flex items-center px-3 py-2 border border-black rounded hover:text-white hover:border-white"
              onClick={() => setCollapsed(!collapsed)}
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              collapsed ? "hidden" : ""
            }`}
          >
            <div className={`text-sm lg:flex-grow `}>
              {children}
              {defaultMenuItems}
            </div>
            <div>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </header>
    );
  },
  MenuItem,
  NotificationsHost: ({ children }) => <div>{children}</div>,
  NotificationsToast: ({ options, onClose, children }) => (
    <div className="flex flex-row-reverse">
      <div
        className="w-1/6 mt-20 p-20 bg-red-600 text-white px-4 py-3 rounded absolute"
        role="alert"
      >
        {options.title && (
          <strong className="font-bold">{options.title}</strong>
        )}
        <span className="block sm:inline">{children}</span>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={onClose}
        >
          <svg
            className="fill-current h-6 w-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  )
};
