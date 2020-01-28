import "piral-core";
import { ComponentType } from 'react';
declare module "piral-core/lib/types/custom" {
  interface PiletCustomApi extends PiletLinkApi {}
}

export interface PiletLinkApi {
  createLink(to: string, name: string): ComponentType;
  createTile(link: string, title: string, description: string): ComponentType;
}
