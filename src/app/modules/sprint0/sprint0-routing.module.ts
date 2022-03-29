import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {Sprint0Component} from "./sprint0.component";
import {ClientsComponent} from "./clients/clients.component";


const routes: Routes = [
  {
    path: "clients", component: ClientsComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [
    RouterModule
  ]
})

export class ClientModuleRoutingModule {
}
