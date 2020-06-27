import { Component, OnInit } from '@angular/core';
import {PlanetsService} from '../services/planets.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IPlanet} from '../models/planet.model';

@Component({
  templateUrl: './selectionlistdemo.component.html',
  styleUrls: ['./selectionlistdemo.component.scss']
})
export class SelectionListDemoComponent implements OnInit {
  private error: string | undefined;
  public allPlanets: Observable<IPlanet[]>;

  get hasError(): boolean {
    return this.error !== undefined;
  }

  get errorMessage(): string {
    return this.error ?? '';
  }

  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.allPlanets = this.planetService.getAll()
      .pipe(
        tap(() => this.error = undefined),
        catchError(err => {
          this.error = err;
          return of([]);
        }),
      );
  }



}
