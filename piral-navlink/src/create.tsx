import { Extend } from "piral-core";
import * as React from "react";
import { PiletLinkApi } from "./types";
import { NavLink } from "react-router-dom";
interface LinkConfig {}

export interface NavLinkProps {
  to: string;
  label: string;
}

export interface TileItemProps {
  link: string;
  title: string;
  description: string;
}

const Tile: React.FC<TileItemProps> = ({ link, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 mb-4 px-2">
      <div className="relative bg-white rounded border hover:border-teal-600">
        <div className="p-4">
          <h3 className="text-lg font-bold hover:text-red-700">
            {!link.startsWith("http") && <NavLink to={link}>{title}</NavLink>}
            {link.startsWith("http") && (
              <a href={link} title={title} target="_blank">
                {title}
              </a>
            )}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

/**
 * Creates new Pilet API extensions for NavLink.
 * @param config The custom navlink configuration, if any.
 */
export function createLinkApi(config: LinkConfig = {}): Extend<PiletLinkApi> {
  return context => (api, target) => ({
    createLink(to: string, name: string) {
      return <NavLink to={to}>{name}</NavLink>;
    },
    createTile(link: string, title: string, description: string) {
      return <Tile link={link} title={title} description={description} />
    }
  });
}
