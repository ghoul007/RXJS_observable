import { toPromise } from "rxjs/operator/toPromise";
import { Observable } from "rxjs/Rx";
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import "rxjs/add/operator/map";

@Injectable()
export class UserService {
  cancel: any;
  cancelPromise: any;
  delayedPromise: any;
  delayedPromise2: any;
  constructor(private http: Http) {}

  getUsers(): Promise<any> {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .toPromise()
      .then(res => res.json());
  }

  getUsersRace() {
    this.delayedPromise = new Promise((resolve, reject) =>
      setTimeout(() => resolve("value1"), 1000)
    );
    this.delayedPromise2 = new Promise((resolve, reject) =>
      setTimeout(() => resolve("value2"), 500)
    );

    return Promise.race([this.delayedPromise, this.delayedPromise2]);
  }
}
