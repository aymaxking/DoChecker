import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./modules/sprint0/clients/clients.component";
import {Sprint0Component} from "./modules/sprint0/sprint0.component";
import {TypesComponent} from "./modules/sprint0/types/types.component";


const routes: Routes = [
  {
    path: "sprint0", component: Sprint0Component,
  },
  {
    path: "clients", component: ClientsComponent,
  },
  {
    path: "types", component: TypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
