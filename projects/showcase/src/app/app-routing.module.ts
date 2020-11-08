import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LibdemoComponent} from './libdemo/libdemo.component';


const routes: Routes = [
  {path: 'libdemo',
    loadChildren: () => import('./libdemo/libdemo.module').then(m => m.LibdemoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
