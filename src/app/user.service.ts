import { toPromise } from "rxjs/operator/toPromise";
import { Observable } from "rxjs/Rx";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getUsers(): Promise<any> {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .toPromise()
      .then(res => res.json());
  }
}
