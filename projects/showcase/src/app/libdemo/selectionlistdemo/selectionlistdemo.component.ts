import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IPlanet} from '../models/planet.model';
import {ActivatedRoute} from '@angular/router';
import {SelectionListConfig} from 'selection-list';

export class PlanetSelectionConfig implements SelectionListConfig {
  title(v: IPlanet): string {
    return v.system.name + ' - ' + v.name;
  }
}


@Component({
  templateUrl: './selectionlistdemo.component.html',
  styleUrls: ['./selectionlistdemo.component.scss'],
  providers: [{provide: 'SelectionListConfig', useClass: PlanetSelectionConfig }]
})
export class SelectionListDemoComponent implements OnInit {
  public allPlanets: Observable<IPlanet[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allPlanets = this.route.data.pipe(map(d => d.planets));
  }
}
