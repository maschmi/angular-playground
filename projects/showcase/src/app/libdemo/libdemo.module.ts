import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionListDemoComponent } from './selectionlistdemo/selectionlistdemo.component';
import {SelectionListModule} from 'selection-list';
import { LibdemoComponent } from './libdemo.component';
import {LibdemoRoutingModule} from './libdemo-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemPlanetService} from './data/InMemPlanetSevice';
import { PlanetDetailsComponent } from './selectionlistdemo/planet-details.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppMaterialModule} from '../app-material.module';
import { ConvertYesNoPipe } from './shared/convert-yes-no.pipe';

@NgModule({
  declarations: [SelectionListDemoComponent, LibdemoComponent, PlanetDetailsComponent, ConvertYesNoPipe],
  exports: [
    SelectionListDemoComponent
  ],
  imports: [
    CommonModule,
    LibdemoRoutingModule,
    SelectionListModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(InMemPlanetService),
    ReactiveFormsModule,
    AppMaterialModule
  ],
  providers: [ConvertYesNoPipe]
})
export class LibdemoModule { }
