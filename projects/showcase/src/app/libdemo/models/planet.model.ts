import {ISolarSystem} from './solarsystem.model';

export interface IPlanet {
  id: number;
  name: string;
  discoveryYear: number | undefined;
  system: ISolarSystem;
  habitable: boolean;
}
