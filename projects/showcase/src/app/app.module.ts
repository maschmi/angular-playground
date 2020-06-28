import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LibdemoModule} from './libdemo/libdemo.module';
import { AlertComponent } from './shared/error/alert.component';
import {ErrorHandlerAlertService} from './shared/error/error-handler-alert.service';
import {AppMaterialModule} from './app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LibdemoModule,
    AppMaterialModule
  ],
  providers: [ { provide: ErrorHandler, useClass: ErrorHandlerAlertService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
