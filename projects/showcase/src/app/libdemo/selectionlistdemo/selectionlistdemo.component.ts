import {Component, OnInit, SkipSelf} from '@angular/core';
import {PlanetsService} from '../services/planets.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of, throwError} from 'rxjs';
import {IPlanet} from '../models/planet.model';
import {AlertService} from '../../shared/error/alert.service';


@Component({
  templateUrl: './selectionlistdemo.component.html',
  styleUrls: ['./selectionlistdemo.component.scss']
})
export class SelectionListDemoComponent implements OnInit {
  public allPlanets: Observable<IPlanet[]>;


  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.allPlanets = this.planetService.getAll();
  }



}
