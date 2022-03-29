import {Component, OnInit} from '@angular/core';
import {Type} from "../../../models/type";
import {Client} from "../../../models/client";
import {Sprint0Service} from "../../../services/sprint0/sprint0.service";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  // @ts-ignore
  types: Type[];

  constructor(private sprint0Service: Sprint0Service) {
  }

  ngOnInit(): void {
    this.getTypes()
  }

  getTypes() {
    this.sprint0Service.getTypes().subscribe((data: Type[]) => {
      this.types = data;
    })
  }


}
