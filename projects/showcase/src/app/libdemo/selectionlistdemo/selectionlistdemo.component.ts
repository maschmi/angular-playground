import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IPlanet} from '../models/planet.model';
import {ActivatedRoute} from '@angular/router';
import {SelectionListConfig} from 'selection-list';

export class PlanetSelectionConfig implements SelectionListConfig {
  hoverColor = 'grey';
  selectionColor: 'blue';
  innerHtml = (v: IPlanet) => {
    return v.name + '<br>' + v.system.name;
  }
  selectedPredicate = (element: IPlanet, currentSelection: IPlanet) => {
    return element.id === currentSelection?.id;
  }
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
  public selectedElement: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.allPlanets = this.route.data.pipe(map(d => d.planets));
  }

  onSelectionChanged($event: any) {
    this.selectedElement = $event;
  }
}
