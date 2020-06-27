import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListDemoComponent } from './selectionlistdemo/selectionlistdemo.component';
import {SelectionListModule} from 'selection-list';
import { LibdemoComponent } from './libdemo.component';
import {LibdemoRoutingModule} from './libdemo-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemPlanetService} from './data/InMemPlanetSevice';

@NgModule({
  declarations: [SelectionListDemoComponent, LibdemoComponent],
  exports: [
    SelectionListDemoComponent
  ],
  imports: [
    CommonModule,
    LibdemoRoutingModule,
    SelectionListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemPlanetService)
  ]
})
export class LibdemoModule { }
