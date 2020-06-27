import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPlanet} from '../models/planet.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private planetsUrl = 'api/planets';

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<IPlanet[]> {
    return this.httpClient.get<IPlanet[]>(this.planetsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

   private handleError(err) {
    let errorMsg: string;
    if (err.error instanceof ErrorEvent) {
      errorMsg = `The client encountered an error: ${err.error.message}`;
    } else {
      errorMsg = `The backend encountered an error: ${err.body.error} (${err.status})`;
    }
    return throwError(errorMsg);
  }
}
