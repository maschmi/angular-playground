import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListDemoComponent } from './selectionlistdemo/selectionlistdemo.component';
import {SelectionListModule} from 'selection-list';



@NgModule({
  declarations: [SelectionListDemoComponent],
  exports: [
    SelectionListDemoComponent
  ],
  imports: [
    CommonModule,
    SelectionListModule
  ]
})
export class LibdemoModule { }
