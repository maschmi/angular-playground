import {Component, OnInit} from '@angular/core';
import {PlanetsService} from '../services/planets.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IPlanet} from '../models/planet.model';
import {ActivatedRoute} from '@angular/router';


@Component({
  templateUrl: './selectionlistdemo.component.html',
  styleUrls: ['./selectionlistdemo.component.scss']
})
export class SelectionListDemoComponent implements OnInit {
  public allPlanets: Observable<IPlanet[]>;

  constructor(private planetService: PlanetsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allPlanets = this.route.data.pipe(map(d => d.planets));
  }

}
