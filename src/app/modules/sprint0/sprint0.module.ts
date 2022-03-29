import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sprint0Component } from './sprint0.component';
import { ClientsComponent } from './clients/clients.component';
import {RouterModule} from "@angular/router";
import { TypesComponent } from './types/types.component';



@NgModule({
  declarations: [
    Sprint0Component,
    ClientsComponent,
    TypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class Sprint0Module { }
