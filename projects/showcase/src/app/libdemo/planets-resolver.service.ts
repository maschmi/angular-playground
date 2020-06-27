import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IPlanet} from './models/planet.model';
import {PlanetsService} from './services/planets.service';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PlanetsResolver implements Resolve<IPlanet[]> {
    constructor(private service: PlanetsService) {
    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<IPlanet[]> {
        return this.service.getAll();
    }
}
