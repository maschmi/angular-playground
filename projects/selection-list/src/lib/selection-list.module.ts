import { NgModule } from '@angular/core';
import {SelectionListComponent} from './selection-list.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [SelectionListComponent],
  imports: [CommonModule
  ],
  exports: [SelectionListComponent]
})
export class SelectionListModule { }
