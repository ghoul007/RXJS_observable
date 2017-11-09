import { BehaviorSubject, Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  private authState: BehaviorSubject<logstate> = new BehaviorSubject(
    logstate.login
  );
  auth: Observable<logstate>;
  private state: logstate;
  constructor() {
    this.auth = this.authState.asObservable();
  }

  login(): void {
    this.state = logstate.login;
    this.authState.next(this.state);
  }

  logout(): void {
    this.state = logstate.logout;
    this.authState.next(this.state);
  }
}

export const enum logstate {
  login,
  logout
}
