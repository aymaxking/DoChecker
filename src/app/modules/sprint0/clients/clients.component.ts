import {Component, OnInit} from '@angular/core';
import {Type} from "../../../models/type";
import {Client} from "../../../models/client";
import {Sprint0Service} from "../../../services/sprint0/sprint0.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  // @ts-ignore
  clients: Client[];

  constructor(private sprint0Service: Sprint0Service) {
  }

  ngOnInit(): void {
    this.getClients()
  }


  getClients() {
    this.sprint0Service.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    })
  }

}
