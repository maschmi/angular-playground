import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IPlanet} from '../models/planet.model';
import {solSystem} from './solarsystems.data';

export class InMemPlanetService implements InMemoryDbService {

  createDb(){
    const planets: IPlanet[] = [
      { id: 0, name: 'Mercury', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 1, name: 'Venus', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 2, name: 'Earth', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 3, name: 'Mars', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 4, name: 'Jupiter', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 5, name: 'Saturn', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 6, name: 'Neptune', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet,
      { id: 7, name: 'Uranus', discoveryYear: undefined, habitable: false, system: solSystem } as IPlanet
      ];
    return { planets };
  }

}
