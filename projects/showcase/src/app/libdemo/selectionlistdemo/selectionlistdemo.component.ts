import {Component, OnInit, SkipSelf} from '@angular/core';
import {PlanetsService} from '../services/planets.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IPlanet} from '../models/planet.model';
import {ErrorService} from '../../shared/error/error.service';


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

  constructor(private planetService: PlanetsService, @SkipSelf() private errorService: ErrorService) { }

  ngOnInit(): void {
    this.allPlanets = this.planetService.getAll()
      .pipe(
        tap(() =>  this.errorService.clearErrors()),
        catchError(err => {
          this.errorService.addError(err);
          return of([]);
        })
      );
  }



}
