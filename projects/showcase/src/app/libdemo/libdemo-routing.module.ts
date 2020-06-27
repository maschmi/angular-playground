import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectionListDemoComponent} from './selectionlistdemo/selectionlistdemo.component';
import {PlanetsResolver} from './planets-resolver.service';

const routes: Routes = [
  { path: 'libdemo',
    children: [
      { path: 'selectionlist',
        component: SelectionListDemoComponent,
      resolve: {
        planets: PlanetsResolver
      }}
    ]
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibdemoRoutingModule { }
