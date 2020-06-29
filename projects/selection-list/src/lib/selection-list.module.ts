import { NgModule } from '@angular/core';
import {DefaultConfig, SelectionListComponent} from './selection-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {SelectionListConfig} from '../public-api';



@NgModule({
  declarations: [SelectionListComponent],
  imports: [BrowserModule
  ],
  exports: [SelectionListComponent]
})
export class SelectionListModule { }
