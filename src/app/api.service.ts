import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Injectable()
export class ApiService {
  constructor(private http_: Http) {}

  search(query: string): Observable<string> {
    return this.http_
      .get("../assets/response.json")
      .map(r => r.json()['prefix'] + query)
      .concatMap(x => {
        return Observable.of(x).delay(Math.random() * 1000);
      });
  }
}
