import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SelectionListDemoComponent} from './selectionlistdemo/selectionlistdemo.component';

const routes: Routes = [
  { path: 'libdemo',
    children: [
      { path: 'selectionlist', component: SelectionListDemoComponent}
    ]
  }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibdemoRoutingModule { }
