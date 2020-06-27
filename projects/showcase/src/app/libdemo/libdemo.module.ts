import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListDemoComponent } from './selectionlistdemo/selectionlistdemo.component';
import {SelectionListModule} from 'selection-list';
import { LibdemoComponent } from './libdemo.component';
import {RouterModule} from '@angular/router';
import {LibdemoRoutingModule} from './libdemo-routing.module';

@NgModule({
  declarations: [SelectionListDemoComponent, LibdemoComponent],
  exports: [
    SelectionListDemoComponent
  ],
  imports: [
    CommonModule,
    LibdemoRoutingModule,
    SelectionListModule
  ]
})
export class LibdemoModule { }
