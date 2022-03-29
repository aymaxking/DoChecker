import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Type} from "../../models/type";
import {Client} from "../../models/client";
import {typesUrl} from "../../global-variables";

@Injectable({
  providedIn: 'root'
})
export class Sprint0Service {

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(typesUrl+"getAll")
  }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(typesUrl+"getAll")
  }
}
